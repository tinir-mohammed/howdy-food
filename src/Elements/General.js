import styled from 'styled-components'

const Image = styled.div`
  height: 92vh;
  width: 100%;
  background: url('https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const Banner = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 92vh;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  width: 50%;
  height: 200vh;
  box-shadow: 5px 5px 5px #ccc;
`

export {Image, Banner, Card}