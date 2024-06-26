export enum APIRoutesName {
    loginRoute = "auth/login",
    logoutRoute = "auth/logout",
    registerRoute = "auth/register",
    verifyRoute = "auth/verify-email",
    kundelikRoute = "auth/kundelik",
    googleRoute = "auth/google",
    resetRoute = "auth/reset",
    userCheck = "auth/user-check",
    sendResetTokenRoute = "auth/send-reset-token",
    me = "me",
    updateMe = "change-profile",
    updatePhoto = "change-avatar",
    getSubjects = "subjects",
    getSurveys = "get-surveys",
    answerSurveys = "answer-surveys",
    getPromoPercentage = "check-promo",
    getSubjectsWithoutRequired = "subjects-without-required",
    getCategories = "categories",
    getSubCategories = "sub-categories",
    getSteps = "steps",
    getFacts = "facts",
    getStepDetail = "step-detail",
    getSubSteps = "sub-steps",
    getSubStep = "sub-step",
    getSubStepResult = "check-sub-step-result",
    createContentAppeal = "content-appeal",
    getAttemptById = "attempt_by",
    userAttempts = "user-attempts",
    allAttemptTypes = "attempt-types",
    getStatAttemptById = "statistics-attempt-by",
    getUntStat = "user-unt-statistics",
    finishAttempt = "finish",
    createAttempt = "attempt",
    createTournamentAttempt = "tournament-attempt",
    createAttemptSettings = "create-attempt-settings",
    createAttemptSettingsUNT = "create-attempt-settings-unt",
    answer = "answer",
    answerResult = "answer-result",
    getFiftyFifty = "get-fifty-fifty",
    saveQuestion = "save-question",
    appealTypes = "appeal-types",
    createAppeal = "create-appeal-question",
    getSubStepExam = "get-step-tests",
    getResultExam = "get-result-step-tests",
    passSubStepExam = "pass-step-test",
    getAllTournament = "tournaments-all",
    getListTournament = "tournaments-list",
    getTournamentDetail = "tournament-detail",
    participateTournament = "participate-tournament",
    payTournament = "pay-tournament",
    getSubTournamentDetail = "sub-tournament-detail",
    getSubTournamentResults = "sub-tournament-results",
    getSubTournamentParticipants = "sub-tournament-participants",
    getTournamentAwards = "tournament-awards",
    getSubTournamentWinners = "sub-tournament-winners",
    getSubTournamentRivals = "sub-tournament-rivals",
    resultByAttemptId = "statistics/attempt-result",
    statByAttemptId = "statistics/attempt-stats",
    statBySubjectId = "statistics/subject-stats",
    getUntPlan = "plan/unt",
    checkPlanUNT = "plan/check-unt-plan",
    getLearningPlan = "plan/learning",
    uploadImage = "upload-image",
    forumCreate = "forum/create",
    teacherClassrooms = "teacher/classrooms",
    teacherDeleteClassroomByID = "teacher/detail-classroom",
    teacherDeleteExamByID = "teacher/delete-attempt-settings",
    teacherStatExamByID = "teacher/statistics/attempt-stats",
    teacherStatByUser = "teacher/get-stats-by-user",
    teacherMyStudents = "teacher/get-own-students",
    teacherStatBySubjectID = "teacher/get-stats-by-subject",
    teacherStatByUNT = "teacher/get-stats-by-unt",
    teacherStatDashboard = "teacher/dashboard",
    teacherGetDetailExamByID = "teacher/get-single-test-statistics",
    teacherGetDetailUNTByID = "teacher/get-unt-test-statistics",
    teacherDeleteUNTExamByID = "teacher/delete-attempt-settings-unt",
    teacherDetailClassroom = "teacher/detail-classroom",
    studentClassrooms = "classrooms",
    allForum = "forum/index",
    getForum = "forum/show",
    getForumDiscuss = "forum/discuss",
    ratingForum = "forum/rating",
    createDiscuss = "discuss/create",
    getAllAttemptSettings = "teacher/my-attempt-settings",
    getAllAttemptSettingsUNT = "teacher/my-attempt-settings-unt",
    getArraySettingsUNT = "teacher/get-subjects-array-by-user-ids",
    getAttemptByPromoCode="attempt-by-promo-code",
    getCategoryQuestionCount="get-category-question-count",
    getSubCategoryQuestionCount="get-sub-category-question-count",
    getMySubjects="get-my-subjects",
    walletIndex="wallet",
    walletRating="wallet-rating",
    refs="my-refs",
    cashHistories="cash-histories",
    requestWithdraw="request-withdraw",
    myBalance="my-balance",
    utm="utm",
    myWallet="my-wallet",
    walletTransfer="wallet-transfer",
    walletStatistics="my-wallet-transaction",
    findUserByEmail="find-user-by-email",
    getImportantNews="important-news",
    getAllNews="all-news",
    getSingleNews="single-news",
    getUnreadMessageCount="notification/unread-count",
    getNotificationAll="notification/all",
    getNotificationTypeAll="notification/notification-types",
    myNotificationIds="notification/my-notification-ids",
    checkNotification="notification/check-notification",
    getAllAnnouncements="announcement",
    getTechSupportTypes="tech-support-types",
    getTechSupportCategories="tech-support-categories",
    getMyTechSupportTickets="my-tech-support-tickets",
    getTechSupportTicketDetail="get-tech-support-ticket-detail",
    createTechSupportTicket="tech-support-create-ticket",
    createTechSupportMessage="tech-support-create-message",
    closeTechSupportTicket="tech-support-close-ticket",
    fullStat="statistics/full-stats",
    findSubStepBySubCategoryId="findSubStepBySubCategoryId",
    getMySavedQuestions="my-saved-questions",
    getMyAppealQuestions="my-appeals-questions",
    getMyAppealQuestionById="my-appeal-question-by",
    getMySavedQuestionById="my-saved-question-by",
    getMyAttemptSingleSettings="my-attempt-settings-single",
    getMyAttemptUNTSettings="my-attempt-settings-unt",
    getActiveBattles="battles",
    myActiveBattles="my-active-battles",
    getBattleByPromoCode="battle",
    getBattleQuestionsByPromoCode="battle-questions",
    battleCreate="battle-create",
    battleStepCreate="battle-step-create",
    getBattleSubjects="battle-subjects",
    getBattleStep="battle-by-step",
    getBattleStats="battle-stats",
    getBattleHistory="battle-history",
    battleAnswer="battle-by-step-answer",
    joinToBattle="join-to-battle-by-promo-code",
    finishBattleResult="battle-finish-result",
    payCreate="paybox",
    myOrders="my-orders",
    getCareerQuizzes="career-quizzes",
    getCareerQuizDetail="career-quiz-detail",
    passCareerQuiz="pass-career-quiz",
    finishCareerQuiz="finish-career-quiz",
    resultCareerQuiz="result-career-quiz",
    getCareerQuizGroupList="career-quiz-groups-list",
    myCareerAttempts="my-career-attempts",
    payCareer="pay-career",
    getMainVideos="main-videos",
    getAllVideos="all-videos",
    getVideoAuthor="video-author-detail",
    getVideoDetail="video-detail",
    getAIAnswerOnQuestion="get-ai-answer",
    hottestInformation="hottest-information",
    allInformations="all-informations",
    getInformation="information",
    getInformationsByCategory="information-by-category",



}
