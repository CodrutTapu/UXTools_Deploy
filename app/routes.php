<?php

    use App\Middleware\AuthMiddleware;
    use App\Middleware\GuestMiddleware;

    $app->get('/','HomeController:home')->setName('home');
    $app->get('/view/{author_id}/{project_id}/{project_name}','ShareController:shareProject');
    $app->get('/projects/getProject/{author_id}/{project_id}', 'ProjectsController:getProject');
    $app->get('/view/mind-map/{author_id}/{project_id}/{project_name}','ShareController:shareProject');
    $app->get('/getCurrentUser', 'AuthController:getCurrentUser');

    $app->group('', function () {

        $this->get('/auth/signup','AuthController:getSignUp')->setName('auth.signup');
        $this->post('/auth/signup','AuthController:postSignUp');

        $this->get('/auth/signin','AuthController:getSignIn')->setName('auth.signin');
        $this->post('/auth/signin','AuthController:postSignIn');

        $this->get('/auth/password/forgot','PasswordController:getForgotPassword')->setName('password.forgot');
        $this->post('/auth/password/forgot','PasswordController:postForgotPassword');

        $this->get('/auth/password/reset/{reset_password_token}/{user_id}','PasswordController:getResetPassword');
        $this->post('/auth/password/reset','PasswordController:postResetPassword')->setName('password.reset');

    })->add(new GuestMiddleware($container));

    $app->group('', function () {

        $this->get('/auth/signout','AuthController:getSignOut')->setName('auth.signout');
        $this->get('/auth/password/change','PasswordController:getChangePassword')->setName('auth.password.change');
        $this->post('/auth/password/change','PasswordController:postChangePassword');

        $this->get('/dashboard/getProjects/{author_id}', 'DashboardController:getProjects');

        $this->post('/projects/deleteProject', 'ProjectsController:deleteProject');
        $this->post('/projects/archiveProject', 'ProjectsController:archiveProject');
        $this->post('/projects/saveNewProject', 'ProjectsController:saveNewProject');
        $this->post('/projects/saveProject', 'ProjectsController:saveProject');
        $this->post('/projects/saveAsTemplate', 'DashboardController:saveAsTemplate');

        $this->get('/new/persona','HomeController:home');
        $this->get('/new/swot_analysis','HomeController:home');
        $this->get('/new/blank_state','HomeController:home');
        $this->get('/edit/{author_id}/{project_id}/{project_name}','HomeController:home');
        $this->get('/new/template/{project_id}/{project_name}', 'HomeController:home');
        $this->get('/new/mind-map','HomeController:home');
        $this->get('/edit/mind-map/{author_id}/{project_id}/{project_name}','HomeController:home');

    })->add(new AuthMiddleware($container));

 ?>
