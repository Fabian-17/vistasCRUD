import { Router } from "express";
export const indexRouter = Router();


indexRouter.get('/empresa', (req, res) => res.render('empresa'));

indexRouter.get('/menu', (req, res) => res.render('menu'));

indexRouter.get('/menu/cruz-del-norte', (req, res) => res.render('cruz-del-norte'));

indexRouter.get('/menu/fontana', (req, res) => res.render('fontana'));

indexRouter.get('/menu/libertad', (req, res) => res.render('libertad'));

indexRouter.get('/menu/litur', (req, res) => res.render('litur'));

indexRouter.get('/menu/monte-carlo', (req, res) => res.render('monte-carlo'));

indexRouter.get('/menu/napoleon', (req, res) => res.render('napoleon'));

indexRouter.get('/support', (req, res) => res.render('support'));

indexRouter.get('/login', (req, res) => res.render('login'));

indexRouter.get('/registro', (req, res) => res.render('registro'));

indexRouter.get('/login/usuario', (req, res) => res.render('loginusuario'));

indexRouter.get('/registro/usuario', (req, res) => res.render('signinusuario'));

indexRouter.get('/registro/empresa', (req, res) => res.render('signinempresa'));

indexRouter.get('/login/empresa', (req, res) => res.render('loginempresa'));

indexRouter.get('/home/usuario', (req, res) => res.render('inicioUser'));


indexRouter.get('/', (req, res) => {
    res.render('index');
});

