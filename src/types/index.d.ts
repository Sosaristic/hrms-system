type JobType = {
  _id: string;
  title: string;
  salary: number;
  jobType: number;
  description: string;
  status: string;
  department: {
    _id: string;
    name: string;
  };
  __v: number;
};
