export interface TeacherDashboardStatisticModel {
  single_tests: number
  classrooms: number
  users: number
  unt_tests: number
  top_single_users: [{
    [name: string]: {
      percentage: number
      points: number
      max_points: number
      subject: string
    }
  }]
  top_unt_users: [{
    [name: string]: {
      percentage: number
      points: number
      max_points: number
    }
  }]
}
