export const isValidEmail=(StringEmail)=> (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(StringEmail))
export const isValidPassword=(StringPassword)=> StringPassword.length>=5
