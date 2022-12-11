import Data from '../../Product Data.json';


function importAll(r) {
    let images = {};
    r.keys().forEach(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../img', false, /.(png|jpe?g|svg)$/));

function Main() {
    console.log(images);
    return (
        <main>
            {Data.map((dataElement, index) => {
                return (
                    <figure key={index} className={`fig${index + 1}`}>
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