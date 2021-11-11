import React, { useState, useRef } from "react";

export default function GraphUI({
  gridArea,
  covidData,
  updateFilteredCovidData,
}) {
  const styles = {
    main: {
      gridArea: gridArea,
      background: "cyan",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "5px",
    },
    buttonDiv: { 
      gridArea: "1 / 1 / span 1 / span 1", 
      margin: "auto 5px"
    },
    formDiv: {
      gridArea: "1 / 2 / span 1 / span 1", 
      margin: "auto 5px"
    },
    form: {
      display: 'flex'
    }
  }
  const today = new Date()//today
 
  function findLastXDay(lastXDay, buttonRef) {
    const endDate = today;
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - lastXDay);
    updateFilteredCovidData(startDate,endDate)

    // Update start and end date inputs if applicable
    if (startInput.current.value !== startDate) {startInput.current.value = startDate.toISOString().split('T')[0]};
    if (endInput.current.value !== endDate) {endInput.current.value = endDate.toISOString().split('T')[0]};

    // Update button classes to highlight active button
    buttons.forEach(({ref}) => {
      if (buttonRef === ref && ref.current.classList.contains("active") === false) {
        ref.current.classList.add("active")
      } else if (ref.current.classList.contains("active")) {
        ref.current.classList.remove("active");
      }
    })
  }

  const [startDate, setStartDate] = useState(covidData[0].date);
  const [endDate, setEndDate] = useState(today.toLocaleDateString("en-GB"));

  const [startInput, endInput] = [useRef(null), useRef(null)];

  // Define buttons & refs (to add an additional button, add an object to the array with text, ref & days)
  const buttons = [{ text: 'LAST 30 DAYS', ref: useRef(null), days: 30 },
                   { text: 'LAST 6 MONTHS', ref: useRef(null),  days: 180 },
                   { text: 'ALL', ref: useRef(null), days: covidData.length+1 }];

  
  function handleStartChange(event) {
    setStartDate(event.target.value);

    // Remove button active class when start date changes
    buttons.forEach(({ref}) => {
      if (ref.current.classList.contains("active")) {
        ref.current.classList.remove("active");}
      });
  }

  function handleEndChange(event) {
    setEndDate(event.target.value);

    // Remove button active class when end date changes
    buttons.forEach(({ref}) => {
      if (ref.current.classList.contains("active")) {
        ref.current.classList.remove("active");}
      });
  }

  function dateSubmitHandler(submitEvent){
    submitEvent.preventDefault();
    updateFilteredCovidData(new Date(startDate), new Date(endDate));
  }

  return (
    <div style={styles.main}>
      <div style={styles.buttonDiv}>
        {buttons.map((button, i) => (
          <button 
            key={i}
            ref={button.ref}
            className="date-toggle-button white"
            onClick={() => findLastXDay(button.days, button.ref)}
          >
            {button.text}
          </button>
        ))}
      </div>
      <div style={styles.formDiv}>
        <form style={styles.form} onSubmit={dateSubmitHandler}>
          <div className="input-lockup">
            <label htmlFor="start">Start:&nbsp;</label>
            <input type="date" id="start" name="start" ref={startInput}
            min={covidData[0].date}
            max={ today.toLocaleDateString('en-ca') } 
            defaultValue ={startDate}
            onChange = {(event)=> handleStartChange(event)} />
          </div>
          <div className="input-lockup">
            <label htmlFor="end">End:&nbsp;</label>
            <input type="date" id="end" name="end" ref={endInput}
            min={startDate}
            max={ today.toLocaleDateString('en-ca') }
            defaultValue = {endDate}
            onChange = {(event)=> handleEndChange(event)}  />
          </div>
          <button className="primary" type='submit'>Apply</button>
        </form>
      </div>
    </div>
  );
}
