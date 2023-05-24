export  const getCurrentWeekDateRange = () => {
    const currentDate = new Date();

    const currentDayOfWeek = currentDate.getDay();

    // Calculate the date of the first day of the week by subtracting the difference from the current date
    const firstDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDayOfWeek);

    const sunday =  firstDayOfWeek.toLocaleDateString('id-ID', { month: 'long', day: 'numeric' });
  // };

    const dayOfWeek = currentDate.toLocaleDateString('id-ID', {
      month: 'long', day: 'numeric', year: 'numeric'
    });

    return `${sunday} - ${dayOfWeek}`;
  };
