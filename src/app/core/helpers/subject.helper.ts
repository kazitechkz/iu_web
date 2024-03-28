import {Subject} from "../../shared/models/subject.model";

export class SubjectHelper{
  static staticSubject:Subject[] = [
    {
        id: 1,
        title_kk: "Математикалық сауаттылық",
        title_ru: "Математическая грамотность",
        enable: true,
        is_compulsory: true,
        max_questions_quantity: 15,
        questions_step: 5,
        image_url: 1985,
        created_at: null,
        updated_at: "2023-12-07T08:21:32.000000Z",
        deleted_at: null,
        image: {
          id: 1985,
          url: "subjects/20yKe_1701948088.webp",
          created_at: "2023-12-07T08:21:31.000000Z",
          updated_at: "2023-12-07T08:21:31.000000Z"
        }
      },
    {
      id: 2,
      title_kk: "Қазақстан тарихы",
      title_ru: "История Казахстана",
      enable: true,
      is_compulsory: true,
      max_questions_quantity: 20,
      questions_step: 5,
      image_url: 1986,
      created_at: null,
      updated_at: "2023-12-07T08:21:52.000000Z",
      deleted_at: null,
      image: {
        id: 1986,
        url: "subjects/A2nNH_1701948107.webp",
        created_at: "2023-12-07T08:21:50.000000Z",
        updated_at: "2023-12-07T08:21:50.000000Z"
      }
    },
    {
      id: 3,
      title_kk: "Оқу сауаттылығы",
      title_ru: "Грамотность чтения",
      enable: true,
      is_compulsory: true,
      max_questions_quantity: 15,
      questions_step: 5,
      image_url: 1987,
      created_at: null,
      updated_at: "2023-12-07T08:22:06.000000Z",
      deleted_at: null,
      image: {
        id: 1987,
        url: "subjects/4oJCz_1701948122.webp",
        created_at: "2023-12-07T08:22:04.000000Z",
        updated_at: "2023-12-07T08:22:04.000000Z"
      }
    },
    {
      id: 4,
      title_kk: "Математика",
      title_ru: "Математика",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1988,
      created_at: null,
      updated_at: "2023-12-07T08:22:21.000000Z",
      deleted_at: null,
      image: {
        id: 1988,
        url: "subjects/uMLSa_1701948136.webp",
        created_at: "2023-12-07T08:22:19.000000Z",
        updated_at: "2023-12-07T08:22:19.000000Z"
      }
    },
    {
      id: 5,
      title_kk: "Физика",
      title_ru: "Физика",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1989,
      created_at: null,
      updated_at: "2023-12-07T08:22:38.000000Z",
      deleted_at: null,
      image: {
        id: 1989,
        url: "subjects/n5rpf_1701948154.webp",
        created_at: "2023-12-07T08:22:36.000000Z",
        updated_at: "2023-12-07T08:22:36.000000Z"
      }
    },
    {
      id: 6,
      title_kk: "Химия",
      title_ru: "Химия",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1990,
      created_at: null,
      updated_at: "2023-12-07T08:22:53.000000Z",
      deleted_at: null,
      image: {
        id: 1990,
        url: "subjects/9XvpP_1701948169.webp",
        created_at: "2023-12-07T08:22:52.000000Z",
        updated_at: "2023-12-07T08:22:52.000000Z"
      }
    },
    {
      id: 7,
      title_kk: "Биология",
      title_ru: "Биология",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1991,
      created_at: null,
      updated_at: "2023-12-07T08:23:11.000000Z",
      deleted_at: null,
      image: {
        id: 1991,
        url: "subjects/flPrU_1701948187.webp",
        created_at: "2023-12-07T08:23:09.000000Z",
        updated_at: "2023-12-07T08:23:09.000000Z"
      }
    },
    {
      id: 8,
      title_kk: "География",
      title_ru: "География",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1992,
      created_at: null,
      updated_at: "2023-12-07T08:23:27.000000Z",
      deleted_at: null,
      image: {
        id: 1992,
        url: "subjects/UYv0X_1701948203.webp",
        created_at: "2023-12-07T08:23:26.000000Z",
        updated_at: "2023-12-07T08:23:26.000000Z"
      }
    },
    {
      id: 9,
      title_kk: "Дүниежүзі тарихы",
      title_ru: "Всемирная история",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1993,
      created_at: null,
      updated_at: "2023-12-07T08:23:49.000000Z",
      deleted_at: null,
      image: {
        id: 1993,
        url: "subjects/jiXiG_1701948225.webp",
        created_at: "2023-12-07T08:23:47.000000Z",
        updated_at: "2023-12-07T08:23:47.000000Z"
      }
    },
    {
      id: 10,
      title_kk: "Құқық",
      title_ru: "Основы права",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1994,
      created_at: null,
      updated_at: "2023-12-07T08:24:05.000000Z",
      deleted_at: null,
      image: {
        id: 1994,
        url: "subjects/T3A5F_1701948242.webp",
        created_at: "2023-12-07T08:24:04.000000Z",
        updated_at: "2023-12-07T08:24:04.000000Z"
      }
    },
    {
      id: 11,
      title_kk: "Ағылшын тілі",
      title_ru: "Английский язык",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1995,
      created_at: null,
      updated_at: "2023-12-07T08:24:20.000000Z",
      deleted_at: null,
      image: {
        id: 1995,
        url: "subjects/8YpMH_1701948256.webp",
        created_at: "2023-12-07T08:24:19.000000Z",
        updated_at: "2023-12-07T08:24:19.000000Z"
      }
    },
    {
      id: 12,
      title_kk: "Қазақ тілі",
      title_ru: "Казахский язык",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1996,
      created_at: null,
      updated_at: "2023-12-07T08:24:51.000000Z",
      deleted_at: null,
      image: {
        id: 1996,
        url: "subjects/NzjEP_1701948274.webp",
        created_at: "2023-12-07T08:24:36.000000Z",
        updated_at: "2023-12-07T08:24:36.000000Z"
      }
    },
    {
      id: 13,
      title_kk: "Қазақ әдебиеті",
      title_ru: "Казахская литература",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1997,
      created_at: null,
      updated_at: "2023-12-07T08:25:04.000000Z",
      deleted_at: null,
      image: {
        id: 1997,
        url: "subjects/oEnPx_1701948300.webp",
        created_at: "2023-12-07T08:25:03.000000Z",
        updated_at: "2023-12-07T08:25:03.000000Z"
      }
    },
    {
      id: 14,
      title_kk: "Орыс тілі",
      title_ru: "Русский язык",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1998,
      created_at: null,
      updated_at: "2023-12-07T08:25:21.000000Z",
      deleted_at: null,
      image: {
        id: 1998,
        url: "subjects/GsAXe_1701948317.webp",
        created_at: "2023-12-07T08:25:19.000000Z",
        updated_at: "2023-12-07T08:25:19.000000Z"
      }
    },
    {
      id: 15,
      title_kk: "Орыс әдебиеті",
      title_ru: "Русская литература",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 1999,
      created_at: null,
      updated_at: "2023-12-07T08:25:53.000000Z",
      deleted_at: null,
      image: {
        id: 1999,
        url: "subjects/Kbud5_1701948349.webp",
        created_at: "2023-12-07T08:25:51.000000Z",
        updated_at: "2023-12-07T08:25:51.000000Z"
      }
    },
    {
      id: 16,
      title_kk: "Информатика",
      title_ru: "Информатика",
      enable: true,
      is_compulsory: false,
      max_questions_quantity: 35,
      questions_step: 5,
      image_url: 2000,
      created_at: null,
      updated_at: "2023-12-07T08:26:10.000000Z",
      deleted_at: null,
      image: {
        id: 2000,
        url: "subjects/lXsSP_1701948365.webp",
        created_at: "2023-12-07T08:26:08.000000Z",
        updated_at: "2023-12-07T08:26:08.000000Z"
      }
    }

  ];

}
