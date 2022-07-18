import Tour from '../../container/booklist2/tore';

const Booklistmap = ({ tours,classNames, slice }) => {
  return (
   
    
      <div className={classNames}>
        {tours.slice(0,slice).map((tour, index) => {
          return <Tour key={index * Math.random( 499394 * 39499)} {...tour}  />;
        })}
      </div>

  );
}; 

export default Booklistmap;
