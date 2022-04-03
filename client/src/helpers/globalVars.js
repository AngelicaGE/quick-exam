export const ENDPOINT = "http://localhost:3005"
export const SUC = "suc"
export const FAIL = "fail"
export const USER_KEY = 'user';

 const countries = ['Mexico', 'Canada']
 const states = ['Morelos', 'British Columbia', 'Queretaro']
 const genders = ['Hombre', 'Mujer']

export const filters = [
     {title: 'Género', options: genders, field: "gender"},
     {title: 'País', options: countries, field: "country"},
      {title: 'Estado', options: states, field: "state"}
]

export const navOptions = [
      "Home",
      "Dashboard",
      "Projects",
      "Tasks",
      "Reporting",
      "Users"


]