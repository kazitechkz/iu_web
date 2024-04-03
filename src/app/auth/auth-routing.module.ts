import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from "./auth-layout/auth-layout.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ResetComponent} from "./reset/reset.component";
import {RoutesName} from "../core/constants/routes.constants";
import {guestGuard} from "../core/guards/guest.guard";
import {TeacherRegisterComponent} from "./teacher-register/teacher-register.component";
import {VerifyEmailComponent} from "./verify-email/verify-email.component";
import {KundelikComponent} from "./kundelik/kundelik.component";
import {NgxSeo} from "@avivharuzi/ngx-seo";

const SignInSEO: NgxSeo = {
  title: 'Вход в iU test: Авторизация для подготовки к ЕНТ',
  meta: {
    description: 'Войдите в свой аккаунт iU test для доступа к тренажерам ЕНТ, видеоурокам и игровой системе обучения. Используйте все возможности платформы для эффективной подготовки к ЕНТ.',
    keywords:"iU test вход, авторизация iU test, вход для подготовки к ЕНТ, образовательная платформа вход, iU test аккаунт",
  },
};
const SignUpSEO: NgxSeo = {
    title: 'Регистрация в iU test: Присоединяйтесь для подготовки к ЕНТ',
    meta: {
        description: 'Создайте аккаунт на iU test и получите доступ к обширным ресурсам для подготовки к Единому Национальному Тестированию: тренажеры, видеоуроки, турниры и профориентация.',
        keywords:"регистрация iU test, создать аккаунт ЕНТ, подготовка к ЕНТ, образовательная платформа, тренажеры ЕНТ",
    },
};

const VerifySEO: NgxSeo = {
    title: 'Подтверждение электронной почты на iU test',
    meta: {
        description: 'Подтвердите вашу электронную почту, чтобы завершить регистрацию на iU test и начать подготовку к ЕНТ с помощью наших тренажеров, видеоуроков и интерактивных турниров.',
        keywords:"подтверждение почты iU test, завершение регистрации ЕНТ, активация аккаунта iU test",
    },
};
const ResetSEO: NgxSeo = {
    title: 'Сброс пароля на iU test: Восстановите доступ к вашему аккаунту',
    meta: {
        description: 'Восстановите доступ к вашему аккаунту на iU test, используя нашу функцию сброса пароля. Быстро и безопасно вернитесь к подготовке к ЕНТ.',
        keywords:"сброс пароля iU test, восстановление доступа ЕНТ, подготовка к ЕНТ, аккаунт iU test",
    },
};
const KundelikSEO: NgxSeo = {
    title: 'Вход через Kundelik.kz на iU test: Упрощенный доступ к подготовке к ЕНТ',
    meta: {
        description: 'Используйте ваш аккаунт Kundelik.kz для быстрого и удобного входа на iU test. Начните подготовку к ЕНТ с нашими тренажерами и видеоуроками без лишних шагов регистрации.',
        keywords:"вход через Kundelik, iU test вход, подготовка к ЕНТ, образовательная платформа, Kundelik.kz",
    },
};
const routes: Routes = [
    {
        path: "",
        component: AuthLayoutComponent,
        canActivate: [guestGuard],
        children: [
            {
                path: RoutesName.loginRoute,
                component: LoginComponent,
                data:{seo:SignInSEO}
            },
            {
                path: RoutesName.registerRoute,
                component: RegisterComponent,
                data:{seo:SignUpSEO}
            },
            {
                path: RoutesName.teacherRegisterRoute,
                component: TeacherRegisterComponent,
                data:{seo:SignUpSEO}
            },
            {
                path: RoutesName.verifyEmailRoute,
                component: VerifyEmailComponent,
                data:{seo:VerifySEO}
            },
            {
                path: RoutesName.resetRoute,
                component: ResetComponent,
                data:{seo:ResetSEO}
            },
            {
                path: RoutesName.kundelikRoute,
                component: KundelikComponent,
                data:{seo:KundelikSEO}
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
