import Data from '../../Product Data.json';


function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}
// console.log(require.context('../../img', false, /.(png|jpe?g|svg)$/));

const images = importAll(require.context('../../img', false, /.(png|jpe?g|svg)$/));

function Main() {
    console.log(images);
    return (
        <main>
            {Data.map((dataElement, index) => {
                {/* console.log(images[dataElement.ProductPicture]); */ }
                {/* import img from `../../img/${dataElement.Product - picture}`; */ }
                return (
                    <figure class={`fig${index + 1}`}>
                        <img src={images[dataElement.ProductPicture]} alt={dataElement.ProductName}></img>
                        <figcaption>
                            <h4>{dataElement.ProductName}<span>{dataElement.Price}</span></h4>
                            <p>{dataElement.Compagny}</p>
                        </figcaption>
                    </figure>
                );
            })}
        </main>
    );

}

export default Main;