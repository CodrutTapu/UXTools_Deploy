<?php

    namespace App\Controllers\Auth;

    use App\Controllers\Controller;

    use Respect\Validation\Validator as v;

    class PasswordController extends Controller
    {
        public function getChangePassword($request,$response)
        {
            $this->view->render($response, 'auth/password/change.twig');
        }

        public function postChangePassword($request,$response)
        {
            $validation = $this->validator->validate($request, [
                'password_old' => v::noWhitespace()->notEmpty()->MatchesPassword($this->auth->user()->password),
                'password' => v::noWhitespace()->length(6, 50),
            ]);

            if ($validation->failed()) {
                return $response->withRedirect($this->router->pathFor('auth.password.change'));
            }

            $user = $this->auth->user();

            $this->db->update("users", [
                "password" => password_hash($request->getParam('password'), PASSWORD_DEFAULT)
            ],[
                "id" => $user->id
            ]);

            $this->flash->addMessage('info', 'Your password was changed.');
            return $response->withRedirect($this->router->pathFor('home'));

        }

        public function getForgotPassword($request, $response) {
            return $this->view->render($response,'auth/password/forgot.twig');
        }

        public function postForgotPassword($request, $response) {

            $email = $request->getParam('email');
            $email_exist = $this->db->select("users","id",["email"=>$email]);

            if (!$email_exist) {
                $this->flash->addMessage('danger', 'Email address does not exist in our database!');
                return $response->withRedirect($this->router->pathFor('password.forgot'));
            } else {

                $token = bin2hex(random_bytes(200));
                $url = "http://52.90.171.184/auth/password/reset/" . $token . "/" . $email_exist[0];

                $this->db->update("users", [
                    "reset_password_token" => $token
                ],[
                    "email" => $email
                ]);

                $full_name= 'UXTools';
                $subject = 'Password Reset';
                $message= $url;
                $to = $email;

                mail($to, $subject, $message, "From: " . $full_name);

                $this->flash->addMessage('info', 'We have sent you an e-mail in order to reset your password!');
                //$this->flash->addMessage('info', $url);
                return $response->withRedirect($this->router->pathFor('password.forgot'));
            }
        }

        public function getResetPassword($request, $response) {
            $reset_password_token = $request->getAttribute('reset_password_token');
            $user_id = $request->getAttribute('user_id');
            $data = ['reset_password_token' => $reset_password_token,'user_id' => $user_id];
            return $this->view->render($response,'auth/password/reset.twig',$data);
        }

        public function postResetPassword($request, $response) {
            $id = $request->getParam('user_id');
            $token = $request->getParam('reset_password_token');
            $password = $request->getParam('new_password');
            $user = $this->db->select("users", "*",["id" => $id]);
            $user = (object) $user[0];

            $validation = $this->validator->validate($request, [
                'new_password' => v::noWhitespace()->length(6, 50),
                'new_password_confirm' => v::noWhitespace()->length(6, 50),
            ]);

            if($validation->failed()) {
                return $response->withRedirect('/auth/password/reset/' . $token . '/' . $id);
            }

            if($user->reset_password_token == $token) {
                $this->db->update("users", [
                    "reset_password_token" => Null,
                    "password" => password_hash($password, PASSWORD_DEFAULT),
                ],[ "AND" => [
                            "reset_password_token" => $token,
                            "id" => $id
                            ]
                ]);

                $this->flash->addMessage('info', 'Password successfully changed!');

                return $response->withRedirect($this->router->pathFor('auth.signin'));

            } else {
                $this->flash->addMessage('danger', "Invalid password reset URL");
                return $response->withRedirect('/auth/password/reset/' . $token . '/' . $id);
            }
        }

    }

 ?>
