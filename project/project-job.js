const jobLibrary = {
    jobs: [],
  
    addJob(job) {
      this.jobs.push(job);
      console.log('Job added:', job);
    },
  
    removeJob(title) {
      const index = this.jobs.findIndex(job => job.title === title);
      if (index !== -1) {
        this.jobs.splice(index, 1);
        console.log('Job removed:', title);
      }
    },
  
    deleteJob(title) {
      const index = this.jobs.findIndex(job => job.title === title);
      if (index !== -1) {
        const removedJob = this.jobs.splice(index, 1)[0];
        console.log('Job deleted:', removedJob);
      }
    },
  
    updateJob(title, updatedJob) {
      const index = this.jobs.findIndex(job => job.title === title);
      if (index !== -1) {
        this.jobs[index] = { ...this.jobs[index], ...updatedJob };
        console.log('Job updated:', updatedJob);
      }
    },
  
    getJobs() {
      return this.jobs;
    }
  };
  
  // Example usage
  const job1 = {
    title: "Senior React Developer",
    type: "Full-Time",
    description: "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
    location: "Boston, MA",
    salary: "$70K - $80K",
    company: {
      name: "NewTek Solutions",
      description: "NewTek Solutions is a leading technology company specializing in web development and digital solutions.",
      contactEmail: "contact@teksolutions.com",
      contactPhone: "555-555-5555"
    }
  };
  
  const job2 = {
    title: "Data Scientist",
    type: "Full-Time",
    description: "Analyze data patterns and provide insights for our clients.",
    location: "Boston, MA",
    salary: "$80K - $90K",
    company: {
      name: "DataX Corp",
      description: "DataX Corp is dedicated to harnessing the power of data to drive business success.",
      contactEmail: "info@dataxcorp.com",
      contactPhone: "555-123-4567"
    }
  };
  
  jobLibrary.addJob(job1);
  jobLibrary.addJob(job2);
  jobLibrary.updateJob("Senior React Developer", { type: "Part-Time" });
  jobLibrary.removeJob("Data Scientist");
  //jobLibrary.deleteJob("Senior React Developer");
  
  console.log('Current Jobs:', jobLibrary.getJobs());
  