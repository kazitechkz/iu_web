import {NgxSeo} from "@avivharuzi/ngx-seo";
import {MoneyBackComponent} from "../../home/money-back/money-back.component";
import {PayOfferComponent} from "../../home/pay-offer/pay-offer.component";
import {TermsOfUseComponent} from "../../home/terms-of-use/terms-of-use.component";

export class SeoConstants {

    static SignInSEO: NgxSeo = {
        title: 'Вход в iU test: Авторизация для подготовки к ЕНТ',
        meta: {
            description: 'Войдите в свой аккаунт iU test для доступа к тренажерам ЕНТ, видеоурокам и игровой системе обучения. Используйте все возможности платформы для эффективной подготовки к ЕНТ.',
            keywords: "iU test вход, авторизация iU test, вход для подготовки к ЕНТ, образовательная платформа вход, iU test аккаунт",
        },
    };
    static SignUpSEO: NgxSeo = {
        title: 'Регистрация в iU test: Присоединяйтесь для подготовки к ЕНТ',
        meta: {
            description: 'Создайте аккаунт на iU test и получите доступ к обширным ресурсам для подготовки к Единому Национальному Тестированию: тренажеры, видеоуроки, турниры и профориентация.',
            keywords: "регистрация iU test, создать аккаунт ЕНТ, подготовка к ЕНТ, образовательная платформа, тренажеры ЕНТ",
        },
    };

    static VerifySEO: NgxSeo = {
        title: 'Подтверждение электронной почты на iU test',
        meta: {
            description: 'Подтвердите вашу электронную почту, чтобы завершить регистрацию на iU test и начать подготовку к ЕНТ с помощью наших тренажеров, видеоуроков и интерактивных турниров.',
            keywords: "подтверждение почты iU test, завершение регистрации ЕНТ, активация аккаунта iU test",
        },
    };
    static ResetSEO: NgxSeo = {
        title: 'Сброс пароля на iU test: Восстановите доступ к вашему аккаунту',
        meta: {
            description: 'Восстановите доступ к вашему аккаунту на iU test, используя нашу функцию сброса пароля. Быстро и безопасно вернитесь к подготовке к ЕНТ.',
            keywords: "сброс пароля iU test, восстановление доступа ЕНТ, подготовка к ЕНТ, аккаунт iU test",
        },
    };
    static KundelikSEO: NgxSeo = {
        title: 'Вход через Kundelik.kz на iU test: Упрощенный доступ к подготовке к ЕНТ',
        meta: {
            description: 'Используйте ваш аккаунт Kundelik.kz для быстрого и удобного входа на iU test. Начните подготовку к ЕНТ с нашими тренажерами и видеоуроками без лишних шагов регистрации.',
            keywords: "вход через Kundelik, iU test вход, подготовка к ЕНТ, образовательная платформа, Kundelik.kz",
        },
    };


    static DashboardSEO: NgxSeo = {
        title: "Главная страница пользоваетеля iU test: Центр подготовки к ЕНТ",
        meta: {
            description: "Добро пожаловать на вашу персональную главную страницу ученика iU test. Здесь вы найдете все необходимые ресурсы для эффективной подготовки к ЕНТ, включая тренажеры по предметам, видеоуроки, турниры и профориентационные тесты.",
            keywords: "iU test пользователь, главная страница ученика, подготовка к ЕНТ, тренажеры ЕНТ, видеоуроки ЕНТ, турниры ЕНТ, профориентация"
        }
    };


    static PassUNTSEO: NgxSeo = {
        title: "Сдать ЕНТ на iU test: Ваш путь к высоким баллам",
        meta: {
            description: "Страница 'Сдать ЕНТ' на iU test предлагает все необходимые инструменты и ресурсы для успешной подготовки и сдачи Единого Национального Тестирования. Получите доступ к тренажерам, практическим тестам и подробным разборам заданий.",
            keywords: "сдать ЕНТ, подготовка к ЕНТ, ЕНТ тесты, iU test ЕНТ, практика ЕНТ, тренажеры ЕНТ, ЕНТ задания, высокий балл ЕНТ"
        }
    };

    static ModeUNTSEO: NgxSeo = {
        title: "Виды ЕНТ на iU test: Найдите лучший способ подготовки",
        meta: {
            description: "На платформе iU test представлены различные виды ЕНТ, включая полный тест из 5 предметов, сдачу одного предмета и индивидуальную тренировку по слабым темам. Выберите подходящий формат и начните подготовку к ЕНТ с максимальной эффективностью.",
            keywords: "виды ЕНТ, полный тест ЕНТ, сдача одного предмета ЕНТ, тренировка ЕНТ, слабые темы ЕНТ, подготовка к ЕНТ, iU test"
        }
    }

    static SingleSubjectUNTSEO: NgxSeo = {
        title: "Сдача 1 предмета на iU test: Индивидуальная подготовка к ЕНТ",
        meta: {
            description: "Специализированная подготовка к ЕНТ по одному предмету на iU test. Идеальный выбор для углубленного изучения конкретной дисциплины и повышения шансов на успешную сдачу.",
            keywords: "сдача одного предмета ЕНТ, индивидуальная подготовка ЕНТ, ЕНТ по предметам, iU test, углубленное изучение, ЕНТ подготовка"
        }
    }

    static CustomizableUntSEO: NgxSeo = {
        title: "Тренировка по слабым темам на iU test: Укрепите свои знания",
        meta: {
            description: "Улучшите понимание слабых тем с помощью индивидуальных тренировок на iU test. Наши инструменты и ресурсы помогут вам преодолеть трудности и уверенно подойти к сдаче ЕНТ.",
            keywords: "тренировка слабых тем, укрепление знаний ЕНТ, подготовка к ЕНТ, персонализированная подготовка, iU test, улучшение знаний"
        }
    }

    static UntStatSEO: NgxSeo = {
        title: "Результаты ЕНТ на iU test: Проверьте свой успех",
        meta: {
            description: "Откройте для себя результаты вашего ЕНТ на iU test. Получите детальный анализ ваших ответов, узнайте свои сильные и слабые стороны, и получите рекомендации для дальнейшего улучшения ваших знаний.",
            keywords: "результаты ЕНТ, проверка ЕНТ, анализ результатов ЕНТ, iU test, успех в ЕНТ, подготовка к ЕНТ"
        }
    }

    static TournamentsSEO: NgxSeo = {
        title: "Список турниров на iU test: Присоединяйтесь к соревнованию",
        meta: {
            description: "Участвуйте в турнирах по ЕНТ на iU test и соревнуйтесь с другими учениками за звание лучшего. Просмотрите предстоящие турниры, выберите подходящий и зарегистрируйтесь для участия. Выиграйте призы и улучшите свои знания.",
            keywords: "турниры iU test, соревнования ЕНТ, список турниров, выиграть призы ЕНТ, регистрация в турнире, подготовка к ЕНТ"
        }
    }

    static BattleListSEO: NgxSeo = {
        title: "Список игр на iU test: Обучение через игру",
        meta: {
            description: "Откройте захватывающий мир игрового обучения на iU test. На нашей платформе представлены различные игры, разработанные специально для подготовки к ЕНТ. Играйте, учитеся и улучшайте свои знания в интересной и вовлекающей форме.",
            keywords: "игры iU test, обучающие игры ЕНТ, список игр, игровое обучение, подготовка к ЕНТ через игру"
        }
    }
    static BattleDetailSEO: NgxSeo = {
        title: "Детали игры на iU test: Обучение через игру",
        meta: {
            description: "Откройте захватывающий мир игрового обучения на iU test. На нашей платформе представлены различные игры, разработанные специально для подготовки к ЕНТ. Играйте, учитеся и улучшайте свои знания в интересной и вовлекающей форме.",
            keywords: "игры iU test, обучающие игры ЕНТ, список игр, игровое обучение, подготовка к ЕНТ через игру"
        }
    }

    static BattleQuestionSEO: NgxSeo = {
        title: "Вопросы игры на iU test: Обучение через игру",
        meta: {
            description: "Откройте захватывающий мир игрового обучения на iU test. На нашей платформе представлены различные игры, разработанные специально для подготовки к ЕНТ. Играйте, учитеся и улучшайте свои знания в интересной и вовлекающей форме.",
            keywords: "игры iU test, обучающие игры ЕНТ, список игр, игровое обучение, подготовка к ЕНТ через игру"
        }
    }
    static BattleStatSEO: NgxSeo = {
        title: "Статистика игр на iU test: Обучение через игру",
        meta: {
            description: "Откройте захватывающий мир игрового обучения на iU test. На нашей платформе представлены различные игры, разработанные специально для подготовки к ЕНТ. Играйте, учитеся и улучшайте свои знания в интересной и вовлекающей форме.",
            keywords: "игры iU test, обучающие игры ЕНТ, список игр, игровое обучение, подготовка к ЕНТ через игру"
        }
    }

    static TournamentDetailSEO: NgxSeo = {
        title: "Детали турнира на iU test: Все, что вам нужно знать",
        meta: {
            description: "Получите полную информацию о предстоящем турнире на iU test. Узнайте условия участия, даты проведения, размер призового фонда и правила. Присоединяйтесь к соревнованию и покажите свои знания на пути к выигрышу.",
            keywords: "детали турнира iU test, условия турнира ЕНТ, призовой фонд турнира, правила турнира, участие в турнире ЕНТ"
        }
    }

    static StepSEO: NgxSeo = {
        title: "Обучение на iU test: Эффективная подготовка к ЕНТ",
        meta: {
            description: "Воспользуйтесь широким спектром обучающих материалов на iU test для подготовки к ЕНТ. Наши видеоуроки, тренажеры и интерактивные курсы созданы, чтобы помочь вам глубже понять предметы и успешно сдать экзамен.",
            keywords: "обучение iU test, подготовка к ЕНТ, видеоуроки ЕНТ, тренажеры ЕНТ, интерактивные курсы, эффективная подготовка ЕНТ"
        }
    }

    static SubStepSEO: NgxSeo = {
        title: "Этапы обучения на iU test: Ваш путь к успеху в ЕНТ",
        meta: {
            description: "Исследуйте структурированные этапы обучения на iU test, разработанные для обеспечения всесторонней подготовки к ЕНТ. От основных концепций до сложных тем, каждый этап нацелен на углубление знаний и улучшение результатов.",
            keywords: "этапы обучения iU test, подготовка к ЕНТ, обучение по предметам, ключевые темы ЕНТ, структура обучения"
        }
    }

    static StepExamSEO: NgxSeo = {
        title: "Экзамен после этапа на iU test: Проверьте свои знания",
        meta: {
            description: "После завершения каждого этапа обучения на iU test, пройдите экзамен, чтобы оценить свои знания. Эти тесты помогут вам понять, насколько хорошо вы усвоили материал, и что нужно повторить или улучшить перед финальным ЕНТ.",
            keywords: "экзамен после этапа, iU test проверка знаний, тесты по этапам обучения, подготовка к ЕНТ, самопроверка знаний"
        }
    }

    static ResultExamSEO: NgxSeo = {
        title: "Результаты экзаменов на iU test: Оцените свой прогресс",
        meta: {
            description: "Просмотрите свои результаты экзаменов на iU test, чтобы оценить прогресс в подготовке к ЕНТ. Получите детальный анализ своих ответов, узнайте сильные и слабые стороны, и определите, какие области знаний требуют дополнительной работы.",
            keywords: "результаты экзаменов iU test, оценка прогресса, анализ результатов ЕНТ, подготовка к ЕНТ, улучшение знаний"
        }
    }

    static ResultAttemptSEO: NgxSeo = {
        title: "Результат попытки сдачи на iU test: Анализируйте и улучшайте",
        meta: {
            description: "Получите подробный анализ результатов вашей последней попытки сдачи на iU test. Определите свои сильные стороны и улучшите понимание слабых моментов, чтобы повысить свои шансы на успех в следующих попытках.",
            keywords: "результат попытки сдачи, анализ экзамена ЕНТ, iU test результаты, улучшение результатов ЕНТ, подготовка к ЕНТ"
        }
    }

    static PlanSEO: NgxSeo = {
        title: "План подписок на iU test: Выберите свой идеальный доступ",
        meta: {
            description: "Изучите различные планы подписок на iU test и выберите оптимальный для вашей подготовки к ЕНТ. Каждый план предлагает уникальный набор ресурсов и возможностей, от видеоуроков до тренажеров и персонализированных рекомендаций.",
            keywords: "план подписок iU test, доступ к образовательным ресурсам, подготовка к ЕНТ, образовательная платформа, видеоуроки, тренажеры ЕНТ"
        }
    }

    static PassUNTByPromoSEO: NgxSeo = {
        title: "Сдача ЕНТ теста по промокоду на iU test: Эксклюзивный доступ",
        meta: {
            description: "Используйте ваш промокод для эксклюзивного доступа к сдаче ЕНТ теста на iU test. Получите возможность проверить свои знания и подготовку к Единому Национальному Тестированию с помощью специального тестирования, доступного только по промокоду.",
            keywords: "ЕНТ тест по промокоду, эксклюзивный тест ЕНТ, iU test промокод, подготовка к ЕНТ, сдача ЕНТ"
        }
    }

    static StatBySubjectIdSEO: NgxSeo = {
        title: "Статистика тестирований ЕНТ по предметам на iU test: Глубокий анализ",
        meta: {
            description: "Получите доступ к детализированной статистике тестирований ЕНТ по предметам на iU test. Изучите общие тенденции, успеваемость и анализируйте данные для улучшения своих стратегий подготовки и понимания сложных тем.",
            keywords: "статистика ЕНТ, анализ ЕНТ по предметам, iU test статистика, результаты тестирования ЕНТ, подготовка к ЕНТ"
        }
    }

    static StatFullUNTSeo: NgxSeo = {
        title: "Полная статистика ЕНТ на iU test: Комплексный анализ",
        meta: {
            description: "Откройте для себя полную статистику ЕНТ на iU test, включая детализированные данные по успеваемости учащихся по годам, регионам и школам. Используйте эту информацию для глубокого понимания тенденций и улучшения подготовки к экзаменам.",
            keywords: "полная статистика ЕНТ, анализ результатов ЕНТ, iU test статистика, успеваемость по ЕНТ, подготовка к ЕНТ"
        }
    }

    static ProfileSeo: NgxSeo = {
        title: "Мой профиль на iU test: Управление учетной записью и прогрессом",
        meta: {
            description: "Войдите в свой профиль на iU test, чтобы управлять личными данными, настройками учетной записи и отслеживать прогресс в подготовке к ЕНТ. Получите доступ к истории обучения, результатам тестов и персонализированным рекомендациям.",
            keywords: "мой профиль iU test, управление учетной записью, прогресс ЕНТ, личные данные, настройки профиля, история обучения"
        }
    }

    static CreateForumSeo: NgxSeo = {
        title: "Написать в форум на iU test: Обмен знаниями и поддержка",
        meta: {
            description: "Присоединяйтесь к обсуждениям на форуме iU test или начните новую тему. Форум – идеальное место для обмена знаниями, получения ответов на ваши вопросы и поддержки в подготовке к ЕНТ. Поделитесь своими идеями или задайте вопрос сообществу.",
            keywords: "написать в форум, форум iU test, обсуждение ЕНТ, поддержка ЕНТ, вопросы ЕНТ, обмен знаниями"
        }
    }

    static ForumListSeo: NgxSeo = {
        title: "Список форумов на iU test: Площадка для общения и поддержки",
        meta: {
            description: "Изучите список форумов на iU test и присоединитесь к обсуждениям, которые помогут вам в подготовке к ЕНТ. Наше сообщество готово поделиться знаниями, советами и предоставить поддержку в любой изучаемой теме.",
            keywords: "список форумов iU test, обсуждение ЕНТ, поддержка ЕНТ, форум подготовки к ЕНТ, сообщество iU test"
        }
    }

    static ForumDetailSeo: NgxSeo = {
        title: "Детали форума на iU test: Все о вашем сообществе обучения",
        meta: {
            description: "Подробная информация о форуме на iU test, включая темы обсуждений, сообщения и активных участников. Присоединяйтесь к диалогам, делитесь знаниями и получайте поддержку в подготовке к ЕНТ.",
            keywords: "детали форума iU test, обсуждение ЕНТ, участники форума, сообщество обучения, поддержка в обучении"
        }
    }

    static WalletSeo: NgxSeo = {
        title: "Кошелек на iU test: Управление вашими финансами",
        meta: {
            description: "Ваш кошелек на iU test позволяет легко управлять финансовыми средствами, вносить платежи за подписки и получать денежные призы. Безопасно проводите транзакции и следите за балансом прямо на платформе.",
            keywords: "кошелек iU test, управление финансами, платежи за подписку, призы за турниры, финансовые операции"
        }
    }

    static WalletTransferSeo: NgxSeo = {
        title: "Переводы кошелька на iU test: Быстро и безопасно",
        meta: {
            description: "Осуществляйте быстрые и безопасные переводы с вашего кошелька на iU test. Переводите средства другим пользователям или выводите их на свой банковский счет с легкостью и безопасностью, которую предоставляет наша платформа.",
            keywords: "переводы кошелька iU test, вывод средств, перевод денег, безопасные транзакции, финансовые операции"
        }
    }

    static WalletDepositSeo: NgxSeo = {
        title: "Набранные iU Coins на iU test: Ваша валюта успеха",
        meta: {
            description: "Отслеживайте количество заработанных iU Coins на iU test и используйте их для получения доступа к эксклюзивным материалам, оплаты подписок или участия в специальных мероприятиях. Ваши iU Coins – это отражение вашего прогресса и усилий в обучении.",
            keywords: "iU Coins, заработок виртуальных монет, использование iU Coins, награды за обучение, валюта платформы iU test"
        }
    }

    static WalletStatisticsSeo: NgxSeo = {
        title: "Статистика кошелька на iU test: Полный контроль над вашими финансами",
        meta: {
            description: "Просмотрите статистику вашего кошелька на iU test для полного понимания и контроля над вашими финансовыми операциями. Получите доступ к истории транзакций, текущему балансу iU Coins и информации о ваших призах и наградах.",
            keywords: "статистика кошелька iU test, история транзакций, баланс iU Coins, финансовые операции, управление кошельком"
        }
    }

    static WalletRatingSeo: NgxSeo = {
        title: "Рейтинг на iU test: Где вы находитесь среди лучших",
        meta: {
            description: "Откройте для себя свое место в рейтинге iU test и сравните свои достижения с другими пользователями. Рейтинги основаны на успехах в тестированиях, участии в турнирах и других вкладах в образовательное сообщество.",
            keywords: "рейтинг iU test, пользовательский рейтинг, тестирование успехов, участие в турнирах, образовательное сообщество"
        }
    }

    static NewsSeo: NgxSeo = {
        title: "Новости iU test: Последние обновления и анонсы",
        meta: {
            description: "Оставайтесь в курсе последних новостей и обновлений от iU test, включая анонсы предстоящих мероприятий, изменения в платформе и советы по подготовке к ЕНТ. Получите всю необходимую информацию для успешной подготовки.",
            keywords: "новости iU test, обновления платформы, анонсы мероприятий, подготовка к ЕНТ, советы ЕНТ"
        }
    }

    static NewsDetailSeo: NgxSeo = {
        title: "Новость на iU test: Заголовок новости",
        meta: {
            description: "Прочитайте последнюю новость на iU test и оставайтесь в курсе важных событий и обновлений. Узнайте о последних изменениях, анонсах мероприятий или советах по подготовке к ЕНТ.",
            keywords: "новость iU test, последние обновления, важные события, анонсы мероприятий, подготовка к ЕНТ"
        }
    }

    static NotificationSeo: NgxSeo = {
        title: "Личные сообщения на iU test: Общение с другими участниками",
        meta: {
            description: "Общайтесь лично с другими участниками iU test, обменивайтесь идеями, задавайте вопросы и получайте поддержку. Личные сообщения - это удобный способ взаимодействия с членами образовательного сообщества.",
            keywords: "личные сообщения iU test, обмен сообщениями, общение с участниками, поддержка в обучении, образовательное сообщество"
        }
    }

    static ClassRoomSeo: NgxSeo = {
        title: "Ваш класс на iU test: Управление учебным процессом",
        meta: {
            description: "Изучите информацию о вашем классе на iU test, включая расписание занятий, домашние задания и другие важные данные. Управляйте своим учебным процессом и оставайтесь в курсе всех событий в вашей учебной группе.",
            keywords: "класс на iU test, расписание занятий, учебный процесс, домашние задания, учебная группа"
        }
    }

    static CareerQuizSeo: NgxSeo = {
        title: "Профориентация на iU test: Найдите свое призвание",
        meta: {
            description: "Получите персонализированные рекомендации по выбору профессии на iU test. Пройдите тестирование, изучите информацию о различных профессиональных направлениях и найдите свое призвание в мире образования и труда.",
            keywords: "профориентация на iU test, выбор профессии, тестирование навыков, рекомендации по карьере, образовательная платформа"
        }
    }

    static CareerQuizDetailSeo: NgxSeo = {
        title: "Детали теста профориентации на iU test: Узнайте больше",
        meta: {
            description: "Получите подробную информацию о тесте профориентации на iU test, включая его структуру, цели и методологию. Узнайте, как этот тест поможет вам определить свои профессиональные интересы и навыки.",
            keywords: "тест профориентации iU test, структура теста, цели тестирования, методология профориентации, выбор профессии"
        }
    }

    static PassCareerQuizSeo: NgxSeo = {
        title: "Прохождение профориентационного теста на iU test: Определите свою карьеру",
        meta: {
            description: "Пройдите профориентационный тест на iU test и получите персонализированные рекомендации по выбору карьеры. Узнайте о своих профессиональных интересах и навыках, чтобы определить наиболее подходящий для вас путь в мире труда.",
            keywords: "прохождение теста профориентации, выбор карьеры, персонализированные рекомендации, профессиональные интересы, навыки"
        }
    }

    static ResultCareerQuizSeo: NgxSeo = {
        title: "Результаты профориентационного теста на iU test: Ваш карьерный путь",
        meta: {
            description: "Просмотрите результаты вашего профориентационного теста на iU test и получите персонализированные рекомендации по выбору карьеры. Узнайте, какие профессиональные интересы и навыки у вас развиты лучше всего и какие карьерные пути могут подходить для вас.",
            keywords: "результаты теста профориентации, выбор карьеры, персонализированные рекомендации, профессиональные интересы, навыки"
        }
    }

    static CareerPlanSeo: NgxSeo = {
        title: "Покупка профориентационных тестов на iU test: Найдите свою карьеру",
        meta: {
            description: "Выберите и приобретите профориентационные тесты на iU test, чтобы получить персонализированные рекомендации по выбору карьеры. Изучите доступные опции тестирования и начните свой путь к успеху в мире труда.",
            keywords: "покупка тестов профориентации, выбор карьеры, персонализированные рекомендации, профессиональные тесты, карьерный путь"
        }
    }

    static MyCareerQuizAttemptsSeo: NgxSeo = {
        title: "История сдач профориентационных тестов на iU test: Отслеживайте свой прогресс",
        meta: {
            description: "Отслеживайте свою историю сдач профориентационных тестов на iU test и анализируйте свой прогресс в выборе карьеры. Получите предыдущие результаты тестирования и используйте их для определения своих профессиональных интересов и навыков.",
            keywords: "история тестирования, профориентационные тесты, анализ результатов, выбор карьеры, профессиональные интересы, навыки"
        }
    }

    static IUTubeSeo: NgxSeo = {
        title: "IUtube на iU test: Обучающие видеоуроки для вашего обучения",
        meta: {
            description: "Откройте мир обучающих видеоуроков на IUtube и изучайте различные предметы и темы. Находите интересные видеоуроки от профессионалов своего дела и обогащайте свои знания и навыки на платформе iU test.",
            keywords: "iUtube, обучающие видеоуроки, образовательная платформа, изучение предметов, учебные материалы"
        }
    }

    static MyTicketsSeo: NgxSeo = {
        title: "Мои запросы в техподдержку на iU test: Отслеживайте свои обращения",
        meta: {
            description: "Отслеживайте свои запросы в техподдержку на iU test и получайте ответы на свои вопросы. Просматривайте статусы своих обращений и взаимодействуйте с технической поддержкой для решения любых проблем.",
            keywords: "запросы в техподдержку, служба поддержки, проблемы пользователей, обратная связь, ответы на вопросы"
        }
    }

    static MyQuestionsSeo: NgxSeo = {
        title: "Мои сохраненные и аппеляционные вопросы на iU test: Управление вашими запросами",
        meta: {
            description: "Просматривайте и управляйте вашими сохраненными вопросами и аппеляциями на iU test. Отслеживайте статусы ваших запросов и взаимодействуйте с администрацией платформы для решения любых возникших проблем.",
            keywords: "сохраненные вопросы, аппеляции, управление запросами, статус запросов, администрация платформы"
        }
    }

    static CreateTicketSeo: NgxSeo = {
        title: "Написать в техподдержку на iU test: Оставьте свой вопрос",
        meta: {
            description: "Отправьте свой вопрос или запрос в службу техподдержки на iU test. Наша команда готова помочь вам в решении любых возникших проблем или вопросов по использованию платформы.",
            keywords: "написать в техподдержку, обратная связь, вопросы пользователей, проблемы с платформой, запросы в службу поддержки"
        }
    }

    static DashboardTeacherSeo: NgxSeo = {
        title: "Главная страница учителя на iU test: Организуйте свое обучение",
        meta: {
            description: "На главной странице учителя iU test вы можете управлять своими курсами, оценивать учеников, создавать задания и многое другое. Организуйте свой учебный процесс с помощью инструментов и возможностей платформы iU test.",
            keywords: "учитель на iU test, управление курсами, оценка учеников, создание заданий, образовательные инструменты"
        }
    }

    static MyTeacherClassroomSeo: NgxSeo = {
        title: "Мой класс учителя на iU test: Управление учебным процессом",
        meta: {
            description: "На странице 'Мой класс' учителя на iU test вы можете управлять своими учебными группами, просматривать расписание занятий, выставлять оценки и взаимодействовать с учениками. Эффективно организуйте свою работу вместе с платформой iU test.",
            keywords: "мой класс, управление учебным процессом, расписание занятий, выставление оценок, взаимодействие с учениками, образовательная платформа"
        }
    }

    static MyStudentSeo: NgxSeo = {
        title: "Мои ученики на iU test: Отслеживайте успехи и прогресс",
        meta: {
            description: "Отслеживайте успехи и прогресс ваших учеников на странице 'Мои ученики' на iU test. Просматривайте оценки, учебные достижения и взаимодействуйте с учениками для обеспечения эффективного обучения.",
            keywords: "мои ученики, успехи учеников, прогресс учеников, оценки, образовательные достижения, взаимодействие с учениками, образовательная платформа"
        }
    }

    static MyStudentsStatSeo: NgxSeo = {
        title: "Вся статистика на iU test: Анализ образовательных данных",
        meta: {
            description: "На странице 'Вся статистика' на iU test вы можете анализировать образовательные данные, такие как успеваемость учеников, результаты тестирования, активность на платформе и другие показатели. Получите полное представление о процессе обучения с помощью статистических данных на iU test.",
            keywords: "вся статистика, образовательные данные, успеваемость учеников, результаты тестирования, активность на платформе, анализ данных, образовательная платформа"
        }
    }

    static MyClassroomDetailSeo: NgxSeo = {
        title: "Детали класса на iU test: Информация о вашем классе",
        meta: {
            description: "Просмотрите детали вашего класса на iU test, включая список учеников, расписание занятий, предметы и другие важные характеристики. Управляйте своим учебным процессом и оставайтесь в курсе всех событий в вашем классе.",
            keywords: "детали класса, список учеников, расписание занятий, предметы, учебный процесс, образовательная платформа"
        }
    }

    static SendStudentToFullUntSeo: NgxSeo = {
        title: "Отправить на полное тестирование на iU test: Подготовьтесь к ЕНТ",
        meta: {
            description: "Отправьте своих учеников на полное тестирование на iU test и подготовьте их к сдаче Единого Национального Тестирования (ЕНТ). Обеспечьте своим ученикам полный набор тестов и материалов для успешной подготовки к экзамену.",
            keywords: "полное тестирование, отправить на тестирование, подготовка к ЕНТ, учебный процесс, образовательная платформа"
        }
    }

    static SendStudentToSingleUntSeo: NgxSeo = {
        title: "Отправить на тестирование по одному предмету на iU test: Подготовьтесь к экзамену",
        meta: {
            description: "Отправьте своих учеников на тестирование по одному предмету на iU test и помогите им подготовиться к экзамену. Предоставьте своим ученикам возможность пройти тесты и оценить свои знания перед экзаменом.",
            keywords: "тестирование по одному предмету, подготовка к экзамену, учебный процесс, образовательная платформа"
        }
    }

    static TeacherProfileSeo: NgxSeo = {
        title: "Мой профиль на iU test: Управление вашим аккаунтом",
        meta: {
            description: "На странице 'Мой профиль' на iU test вы можете управлять своим аккаунтом, редактировать личные данные, изменять настройки безопасности и получать доступ к персонализированным рекомендациям. Управляйте своим образовательным опытом с помощью iU test.",
            keywords: "мой профиль, управление аккаунтом, личные данные, настройки безопасности, персонализированные рекомендации, образовательная платформа"
        }
    }

    static PrivacyPolicySeo: NgxSeo = {
        title: "Политика конфиденциальности на iU test: Ваша безопасность и приватность",
        meta: {
            description: "Ознакомьтесь с политикой конфиденциальности на iU test, где мы обеспечиваем безопасность и защиту ваших личных данных. Узнайте, как мы собираем, используем и защищаем вашу информацию на нашей платформе.",
            keywords: "политика конфиденциальности, безопасность данных, личная информация, защита приватности, образовательная платформа"
        }
    }

    static ContractOfferSeo: NgxSeo = {
        title: "Договор публичной оферты на iU test: Условия использования платформы",
        meta: {
            description: "Ознакомьтесь с договором публичной оферты на iU test, где устанавливаются условия использования платформы. Прочтите внимательно правила и условия, которые регулируют ваше взаимодействие с нашей образовательной платформой.",
            keywords: "договор публичной оферты, условия использования, правила платформы, образовательная платформа"
        }
    }

    static MoneyBackSeo: NgxSeo = {
        title: "Политика возврата средств на iU test: Условия возврата",
        meta: {
            description: "Ознакомьтесь с политикой возврата средств на iU test, где устанавливаются условия и правила возврата оплаты за услуги платформы. Узнайте подробности о процедуре возврата и условиях, регулирующих этот процесс.",
            keywords: "политика возврата средств, условия возврата, возврат оплаты, образовательная платформа"
        }
    }

    static PayOfferSeo: NgxSeo = {
        title: "Политика проведения платежей на iU test: Безопасные и удобные транзакции",
        meta: {
            description: "Ознакомьтесь с политикой проведения платежей на iU test, где обеспечивается безопасность и удобство процесса платежей. Узнайте о правилах и механизмах проведения транзакций на нашей платформе.",
            keywords: "политика проведения платежей, безопасные транзакции, удобство платежей, правила платежей, образовательная платформа"
        }
    }

    static TermsOfUseSeo: NgxSeo = {
        title: "Пользовательское соглашение на iU test: Условия использования платформы",
        meta: {
            description: "Ознакомьтесь с пользовательским соглашением на iU test, где устанавливаются условия и правила использования платформы. Прочтите внимательно правила, которые регулируют ваше взаимодействие с нашей образовательной платформой.",
            keywords: "пользовательское соглашение, условия использования, правила платформы, образовательная платформа"
        }
    }

    static InformationsSeo: NgxSeo = {
        title: "Последние новости и события на iU test: Обновления и анонсы",
        meta: {
            description: "Оставайтесь в курсе последних новостей и событий на платформе iU test. Узнайте обо всех обновлениях, анонсах и важных изменениях, которые могут повлиять на ваш учебный процесс и подготовку к экзаменам.",
            keywords: "новости iU test, последние события, обновления платформы, анонсы iU test, новости образования, изменения в подготовке к экзаменам"
        }
    }


    static NotFoundSeo: NgxSeo = {
        title: "404 Страница не найдена на iU test",
        meta: {
            description: "К сожалению, запрашиваемая страница не найдена на платформе iU test. Вернитесь на главную страницу или воспользуйтесь навигацией, чтобы найти нужную информацию.",
            keywords: "404, страница не найдена, ошибка, образовательная платформа"
        }
    }

    static LIFEHACKS_STATIC_PAGES = {
        "how_to_prepare_to_unt": {
            title: "Как подготовиться к ЕНТ - Советы и рекомендации на iU test",
            meta: {
                description: "Ищете эффективные методы подготовки к ЕНТ? На платформе iU test вы найдете проверенные советы, рекомендации и материалы для подготовки, чтобы успешно сдать экзамен.",
                keywords: "подготовка к ЕНТ, как подготовиться к ЕНТ, советы ЕНТ, рекомендации ЕНТ, материалы для подготовки ЕНТ, экзамен ЕНТ, успешная подготовка к ЕНТ"
            }
        },
        "lifehacks_to_unt": {
            title: "Лайфхаки для подготовки к ЕНТ - Секреты успешной подготовки на iU test",
            meta: {
                description: "Откройте для себя уникальные лайфхаки и секреты успешной подготовки к ЕНТ на платформе iU test. Узнайте, как эффективно организовать учебный процесс, быстро запоминать информацию и сохранять спокойствие во время экзамена.",
                keywords: "лайфхаки ЕНТ, подготовка к ЕНТ, секреты успешной подготовки, советы ЕНТ, техники запоминания ЕНТ, организация учебы ЕНТ, стрессоустойчивость ЕНТ"
            }
        },
        "psycho_prepare_to_unt": {
            title: "Психологическая подготовка к ЕНТ: Преодоление стресса и повышение уверенности",
            meta: {
                description: "Подробное руководство по психологической подготовке к ЕНТ на платформе iU test. Узнайте, как справиться со стрессом и повысить уверенность в себе перед экзаменом, чтобы достичь наилучших результатов.",
                keywords: "психологическая подготовка ЕНТ, преодоление стресса ЕНТ, уверенность перед ЕНТ, справиться со стрессом экзамена, техники релаксации ЕНТ, мотивация ЕНТ, успех на ЕНТ"
            }
        },
        "top_ten_failures": {
            title: "Топ-10 ошибок при подготовке к ЕНТ и как их избежать - Советы на iU test",
            meta: {
                description: "Избегайте распространенных ошибок при подготовке к ЕНТ с помощью нашего гида. Узнайте о топ-10 промахах, которые могут снизить ваши шансы на успех, и получите проверенные советы по их предотвращению на платформе iU test.",
                keywords: "ошибки при подготовке к ЕНТ, как избежать ошибок ЕНТ, подготовка к ЕНТ, советы по подготовке к ЕНТ, частые ошибки ЕНТ, успешная подготовка к ЕНТ"
            }
        },
        "history_date_for_unt": {
            title: "Важные даты по истории Казахстана для ЕНТ - Полный гид на iU test",
            meta: {
                description: "Подготовьтесь к ЕНТ с нашим полным гидом по важным датам истории Казахстана. Узнайте ключевые моменты, которые могут быть заданы на экзамене, и улучшите свои шансы на успех.",
                keywords: "даты по истории Казахстана, история Казахстана ЕНТ, важные даты ЕНТ, подготовка к ЕНТ история, ЕНТ гид, экзамен по истории Казахстана"
            }
        },
        "last_step_preparation_to_unt": {
            title: "Подготовка к ЕНТ на последнем этапе: Эффективное использование последних недель",
            meta: {
                description: "Максимизируйте эффективность вашей подготовки к ЕНТ в последние недели перед экзаменами. Наши советы помогут вам оптимизировать учебный процесс, улучшить запоминание и поддержать высокий уровень мотивации.",
                keywords: "подготовка к ЕНТ, последний этап подготовки, эффективная подготовка, ЕНТ советы, учебные стратегии ЕНТ, улучшение запоминания, мотивация для ЕНТ"
            }
        },
        "strategy_for_unt": {
            title: "Стратегии сдачи каждого блока ЕНТ: Советы экспертов по каждому предмету на iU test",
            meta: {
                description: "Улучшите свои шансы на успешную сдачу ЕНТ с помощью стратегий и советов экспертов по каждому предмету. От математики до истории – получите рекомендации, которые помогут вам выделиться.",
                keywords: "стратегии сдачи ЕНТ, советы по ЕНТ, экспертные советы ЕНТ, подготовка к ЕНТ, стратегии по предметам ЕНТ, ЕНТ рекомендации, успешная сдача ЕНТ"
            }
        },
        "hot_to_choose_university": {
            title: "Как выбрать вуз: Руководство для абитуриентов на iU test",
            meta: {
                description: "Перед вами решающий выбор – какой вуз выбрать для дальнейшего обучения. Наше руководство поможет вам определиться с университетом, учитывая важные критерии выбора, специальности, рейтинги и перспективы трудоустройства.",
                keywords: "выбор вуза, как выбрать университет, руководство по выбору вуза, критерии выбора вуза, специальности в вузе, рейтинги вузов, трудоустройство после вуза"
            }
        },
        "response_for_choosing_profession": {
            title: "Ответственность при выборе профессии: Почему это важно на iU test",
            meta: {
                description: "Выбор профессии — одно из самых важных решений в вашей жизни. Наша статья подчеркивает значимость ответственного подхода к этому выбору, влияние на будущее трудоустройство и личностное развитие.",
                keywords: "выбор профессии, ответственный выбор, карьерное планирование, будущее трудоустройство, личностное развитие, профессиональный выбор"
            }
        },
        "receipt_of_happiness": {
            title: "Рецепт счастья: Как найти гармонию и радость в жизни на iU test",
            meta: {
                description: "Исследуйте универсальные составляющие счастья и узнайте, как применять эти принципы в своей жизни. Наш рецепт счастья предлагает практические советы и стратегии для достижения гармонии, радости и удовлетворенности.",
                keywords: "рецепт счастья, как быть счастливым, поиск счастья, жизненная гармония, радость жизни, пути к счастью, удовлетворенность жизнью"
            }
        }
    }

}
