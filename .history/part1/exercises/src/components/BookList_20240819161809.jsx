export default function BookList() {
   let pageTitle = "React To This Page!";
   let book1 = "https://media.wiley.com/product_data/coverImage300/86/14051592/1405159286.jpg";
   let book2 = "https://iep.utm.edu/wp-content/media/plato.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1417985695i/240592.jpg";

   return (
      <div>
         <h2>{pageTitle}</h2>
         <img src={book1} alt="Philosophical Investigations - Ludwig Wittgenstein" />
         <img src={book2} alt="Plato: Theaetetus" />
         <img src={book3} alt="The Open Society and Its Enemies - Karl Popper" />
      </div>      
   );
}