
import styled from 'styled-components';

const ListItem = styled.li`
    width: 20%;
    list-style: none;
`

const CardItem = ({ country }) => {

    console.log(country)
    
    return (
        <ListItem>
            <img />
            <div>
                <h2>Title</h2>
                <p>Population</p>
                <p>Region</p>
                <p>Capital</p>
            </div>
        </ListItem> 
    );
};

export default CardItem;