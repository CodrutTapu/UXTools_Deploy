<?php

    use App\Middleware\AuthMiddleware;
    use App\Middleware\GuestMiddleware;

    $app->get('/','HomeController:home')->setName('home');

    $app->group('', function () {

        $this->get('/auth/signup','AuthController:getSignUp')->setName('auth.signup');
        $this->post('/auth/signup','AuthController:postSignUp');

        $this->get('/auth/signin','AuthController:getSignIn')->setName('auth.signin');
        $this->post('/auth/signin','AuthController:postSignIn');


    })->add(new GuestMiddleware($container));

    $app->group('', function () {

        $this->get('/auth/signout','AuthController:getSignOut')->setName('auth.signout');
        $this->get('/auth/password/change','PasswordController:getChangePassword')->setName('auth.password.change');
        $this->post('/auth/password/change','PasswordController:postChangePassword');

        $this->get('/dashboard/getProjects/{author_id}', 'DashboardController:getProjects');
        
        $this->get('/getCurrentUser', 'AuthController:getCurrentUser');

        $this->post('/projects/deleteProject', 'ProjectsController:deleteProject');
        $this->post('/projects/archiveProject', 'ProjectsController:archiveProject');
        $this->post('/projects/saveNewProject', 'ProjectsController:saveNewProject');
        $this->post('/projects/saveProject', 'ProjectsController:saveProject');

        $this->get('/new/persona','HomeController:home');
        $this->get('/new/swot_analysis','HomeController:home');
        $this->get('/new/blank_state','HomeController:home');
        $this->get('/projects/getProject/{author_id}/{project_id}', 'ProjectsController:getProject');
        $this->get('/edit/{author_id}/{project_id}/{project_name}','HomeController:home');
        $this->get('/view/{author_id}/{project_id}/{project_name}','ShareController:shareProject');

    })->add(new AuthMiddleware($container));

 ?>
