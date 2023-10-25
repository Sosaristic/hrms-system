export interface Step1FormValuesTypes {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
  }

  export interface Step2FormValuesTypes {
    workType: string,
    department: string
    joiningDate: Date
    email: string
  }

  export interface Step3FormValuesTypes {
    slackID: string
    twitterLink: string
    githubLink: string
  }

  export  type Combined = Step1FormValuesTypes | Step2FormValuesTypes | Step3FormValuesTypes