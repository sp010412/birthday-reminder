import React from 'react';

// const List = ({ people }) => {
//   return (
//     <>
     // {
        /* {people.map((person) => {

        const { id, name, age, image } = person;

        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      }
      )}
    </>
  );
}; */
//}

const currentDate = new Date();
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();
const dateNow = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {

        const { id, name, age, date, image } = person;

        if(date === dateNow) {

        
          return (
            <article key={id} className='person'>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          )
          }
      }
      )}
    </>
  );
};

export default List;
