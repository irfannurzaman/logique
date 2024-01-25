import { useEffect, useState } from 'react'
import Header from './components/header';
import Card from './components/Card';
import Menu from './components/Menus';
import useGetData from './common/customHooks';
import { Spin, Row, Button, Col } from "antd"




function App() {
  const { state, getApi, setSearch, loadMore } = useGetData()
  const [resultInput, setResultInput] = useState('')
   

    useEffect(() => {
      getApi()
    },[])

    const onChange = (val) => {
        const value = val.target.value
        setSearch(value)
    }
  
  
  const onClickLoadMore = () => {
    loadMore(state.next_page)
  }


  console.log("state", state);

  return (
    <>
      <Header onClick={() => {
        getApi()
        setResultInput(state.input)
      }} onChange={onChange} />
      <Menu>
        {resultInput &&
          <Row style={{ paddingBottom: '40px'}} justify="center" align="stretch">
            <span style={{ color: '#334155', fontSize: 15 }}>Search result for :&nbsp; </span>
            <span style={{ color: '#7b34dd', fontSize: 15, fontWeight: 'bold' }}>{resultInput}</span>
          </Row>
        }
        {
          !state.loading ?
            state?.data.map((item, index) => <Card item={item} />)
            : <Row justify="center" align="middle" style={{ 
              width: '100%',
              height: 200,
            }}>
              <Spin size="large" />
            </Row>
        }
        {
          !state.loading && state.next_page !== null &&
          <Row style={{ marginTop: 20, marginBottom: 20 }} justify="center" align="middle">
            <Button onClick={onClickLoadMore} shape="round"  color='#e2e8f0' style={{ backgroundColor: '#e2e8f0', color: '#64748b'}} size='16'>
                Load More
            </Button>
          </Row>
        }
        </Menu>
    </>
  )
}

export default App
