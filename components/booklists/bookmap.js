import Tour from '../../container/booklist2/tore';

const Booklistmap = ({ tours,classNames,slice  }) => {
  return (
   
    
      <div className={classNames}>
        {tours.slice(0, slice).map((tour) => {
          return <Tour key={tour.id} {...tour}  />;
        })}
      </div>

  );
}; 

export default Booklistmap;
