import React from 'react';
import {connect} from 'react-redux'
import Table from '@material-ui/core/Table';
import { Button } from 'react-bootstrap'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getCategory} from '../publics/actions/category'
// import {deleteCategory} from '../publics/actions/category'


class CategoryList extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      categoryList: [],
      id: ''
      
    }
    console.log(this.state.categoryData)
    // this.handleDelete = this.handleDelete.bind(this)
  }
  

  componentDidMount = async () => {
    await this.props.dispatch(getCategory())
    this.setState ({categoryList: this.props.category.categoryList})
}

//   handleDelete = (event) => {
//     event.preventDefault()
//   this.state.map((category)=>{

//   this.props.dispatch(deleteCategory(category.id))
//     .then(() => {
//       this.setState({
//         showModal: true,
//         modalTitle: "Success",
//         modalMessage: 'Succes deleting Category',
//         redirectOnCloseModal: true
//       })
//     })
//     .catch(() => {
//       this.setState({
//         showModal: true,
//         modalTitle: 'Failed',
//         modalMessage: this.props.category.errMessage
//       })
//     })
//     console.log(category)
//   })
  
// }

  render(){
  console.log( this.props.category)
  const {categoryList} = this.state
  return (
    <Paper style={{width: "100%", marginTop: "124px", overflowX: "auto"}}>
      <Table style={{minWidth: "650"}}>
        <TableHead>
          <TableRow>
          <TableCell><h3><b>Id</b></h3></TableCell>
            <TableCell><h3><b>Categories</b></h3></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
              {categoryList.length !== 0 ? categoryList.map((category) => {
              return <TableRow key ={category.name}>
                 <TableCell component="th" scope="row" key={category.id}> {category.id} </TableCell>
                 <TableCell component="th" scope="row" key={category.id}> {category.name} </TableCell>
                 </TableRow>
              })
              :<p><center>Loading...</center></p>
              } 
        </TableBody>
      </Table>
    </Paper>
  );
}
}

const mapStateToProps = state => {
  console.log('here')
  return{
    category: state.category
  }
}

export default connect(mapStateToProps)(CategoryList)