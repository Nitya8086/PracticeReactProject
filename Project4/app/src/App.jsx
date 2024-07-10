import { useState ,useEffect} from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL ="http://localhost:9000";
const App = () => {

  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null)
  const [filteredData,setFilteredData] = useState(null);

  const [selectedBtns,setSelectedBtns]= useState("all");


  useEffect(()=>{
    const fetchData= async()=>{
      setLoading(true);
      try{
        const response =await fetch(BASE_URL);
  
        const json = await response.json();
      
        setData(json);
        setFilteredData(json)
        setLoading(false)
      }
      catch(json){
        setError("unable to fetch data")
  
      }
     
      
    }
    fetchData();
  },[])

const searchFood=(e)=>{
  const searchValue = e.target.value;

  if(searchValue===""){
    setFilteredData(null);
  }

  const filter = data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase())
);
setFilteredData(filter);
}


const filterFood = (type)=>{
  if(type==="all"){
    setFilteredData(data);
    setSelectedBtns('all');
    return ;
  }
  
  const filter = data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase())
);
setFilteredData(filter);
setSelectedBtns(type)

}


const filterBtn=[
  {
    name:'All',
    type:'all'
  },
  {
    name:"Breakfast",
    type:'breakfast'
  }, {
    name:'Lunch',
    type:'lunch'
  }, {
    name:'Dinner',
    type:'dinner'
  },
]


  if(error){
    return <div>{error}</div>
  }
  if(loading){
    return <div>loading.....</div>
  }
  return (
    <>
     <Container>
      <TopContainer>
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input onClick={searchFood} placeholder="Search Food "type="text" />
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtn.map((value)=>(
        <Button isSelected={selectedBtns===value.type} key ={value.name} onClick={()=>filterFood(value.type)}>{value.name}</Button>)
        )}


      </FilterContainer>
    
    </Container>
     <SearchResult data={filteredData}/>
    </>
   
  );
};

export default App;

export const Container = styled.div`
max-width:1200px;
margin:0 auto;

`;

const TopContainer = styled.section`
height:140px;
display:flex;
justify-content:space-between;
align-items: center;
padding:16px;

.search{
  input{
    background-color: transparent;
    border:1px solid red;
    color :white;
    border-radius:5px;
    font-size:16px;
    height:40px;
    padding: 0 10px;
    &::placeholder{
      color:white;
    }
  }
}

@media(0<width <600px){
  flex-direction:column;
  height:120px;
}

`;

const FilterContainer=styled.section`
display :flex;
gap :12px;
justify-content:center;
padding-bottom: 40px;


`;

export const Button = styled.button`

background: ${({ isSelected }) => (isSelected ? "green" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f22f2f;
  }
`;
