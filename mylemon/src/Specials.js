import Swal from 'sweetalert2'; 
import SpecialsCard from './SpecialsCard';
import greekSaladImage from './assets/greekSalad.jpg';
import bruschettaImage from './assets/bruchetta.svg';
import lemonDessertImage from './assets/lemonDessert.jpg';

const specialsData = [
    {
        name: "Greek salad",
        price: "$12.99",
        image: greekSaladImage,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        name: "Bruchetta",
        price: "$5.99",
        image: bruschettaImage,
        description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        name: "Lemon Dessert",
        price: "$4.78",
        image: lemonDessertImage,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
];

const Specials = () => {
    
    const handleOrder = (specialName) => {
      Swal.fire({
        title: 'Do you want to order this?',
        text: `Your order for ${specialName} will be confirmed.`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, order it!',
        cancelButtonText: 'No, cancel!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Ordered!',
            `Your order for ${specialName} has been confirmed.`,
            'success'
          );
        }
      });
    };

    return (
        <section className="specials-section">
            <div className="specials-header">
                <h2>This week's specials!</h2>
                <button className="online-menu-button">Online Menu</button>
            </div>
            <div className="specials-container">
                {specialsData.map((special, index) => (
                    <SpecialsCard
                        key={index}
                        image={special.image}
                        name={special.name}
                        price={special.price}
                        description={special.description}
                        handleOrder={() => handleOrder(special.name)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Specials;