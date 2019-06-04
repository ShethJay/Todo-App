import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const styles = theme => ({
    root: {
        margin: '20px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    grid: {
        //display: "inline-block",

    },
    textField: {
        width: '',
    },

});

class Todo extends Component {

    state = {
        title: '',
        helperText: '',
        number: 1,
    }
    onInputChange = (e) => {
        if (e.target.value !== "") {
            this.setState({
                title: e.target.value,
                helperText: ''
            })
        }
        else {
            this.setState({
                title: '',
                helperText: '',
            })
        }
    }
    onKeyUp = (e) => {
        if (e.keyCode === 13 && this.state.title !== "") {
            this.props.addTodo(this.state.title)
            this.setState({
                title: '',
                helperText: '',
            })
        }
        else if (e.keyCode === 13 && this.state.title === "") {
            this.setState({ helperText: 'Todo cannot be blank' })
        }
        if (e.keyCode === 27) {
            this.setState({
                title: ''
            })
        }
    }
    addTodo = (e) => {
        if (this.state.title !== "") {
            this.props.addTodo(this.state.title)
            this.setState({
                title: '',
                helperText: '',
            })
        }
        else {
            this.setState({ helperText: 'Todo cannot be blank' })
        }
    }
    onDeleteTodo = (id) => {
        //this.deleteTodo(id);
        this.onUpdateTodo(id, { isRemoved: true });
    }
    onCheckTodo = (id, e) => {
        //this.props.checkTodo(id , e.target.checked)
        this.onUpdateTodo(id, { isDone: e.target.checked });
    }
    onUpdateTodo = (id, todo) => {
        this.props.updateTodo(id, todo);
    }
    onShowAllFilterClick = (e) => {
        e.preventDefault();
        this.props.showAll();
        this.setState({
            number: 1
        })
    }
    onIsActiveFilterClick = (e) => {
        e.preventDefault();
        this.props.isActive();
        this.setState({
            number: 2
        })
    }
    onIsCompltedFilterClick = (e) => {
        e.preventDefault();
        this.props.isComplete();
        this.setState({
            number: 3
        })
    }

    render() {
        console.log('num', this.state.number);
        const { classes, currentFilter } = this.props;
        return (
            <Container fixed >
                <Grid item xs={12} className={classes.root}>
                    <Grid item xs={2} className={classes.grid + " textFieldGrid"}>
                        <Typography
                            variant="h5"
                        >
                            Add Todos :
                        </Typography>
                    </Grid>
                    <Grid item xs={7} className={classes.grid} >
                        <TextField
                            id="standard-required"
                            label="Enter Todos"
                            className="textField"
                            margin="normal"
                            value={this.state.title}
                            onChange={this.onInputChange}
                            onKeyUp={this.onKeyUp}
                            fullWidth
                            helperText={this.state.helperText}
                            error={this.state.helperText.length === 0 ? false : true}
                        />
                    </Grid>
                    <Grid item xs={2} className={classes.grid + " buttonGrid"}>
                        <Button
                            size="large"
                            color="primary"
                            onClick={this.addTodo}
                            variant="contained"
                        >
                            Add Todo
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} className="root">
                    <Grid item xs={11}>
                        <Typography
                            variant="h4"
                            className="todoList"
                        >
                            Todo's List
                        </Typography>
                    </Grid>

                    <div className="list">
                        <Table className={classes.table} size="small" > 
                            <TableHead >
                                <TableRow>
                                    <TableCell className="noBorder">Todo Task </TableCell>
                                    <TableCell className="noBorder" align="left">Done</TableCell>
                                    <TableCell  className="noBorder" align="left">Remove</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.todo.length > 0
                                    && this.props.todo
                                        .filter(todo => !todo.isRemoved)
                                        .filter(todo => currentFilter === 'isActive' ? !todo.isDone : true)
                                        .filter(todo => currentFilter === 'isDone' ? todo.isDone : true)
                                        .map(todo =>
                                            (
                                                <TableRow key={todo.id}>
                                                    <TableCell className="noBorder" size="small" component="th" scope="row">
                                                        <Typography
                                                            variant="body1"
                                                        >
                                                            {todo.title}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell className="noBorder" size="small" align="left">
                                                        <Checkbox
                                                            onChange={(e) => this.onCheckTodo(todo.id, e)}
                                                            checked={todo.isDone}
                                                            value="checkedB"
                                                            color="primary"
                                                        />
                                                    </TableCell>
                                                    <TableCell className="noBorder" size="small" align="left">
                                                        <IconButton
                                                            aria-label="Delete"
                                                            onClick={() => this.onDeleteTodo(todo.id)}
                                                        >
                                                            <DeleteIcon
                                                                fontSize="large"
                                                                color="secondary"
                                                                variant="contained"
                                                            />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                            </TableBody>
                        </Table>
                    </div>
                </Grid>
                <div className="filterContainer">
                    <span className="filter">Filters:  </span>
                    <span className={`filter ${this.state.number === 1 ? 'active' : ''}`} onClick={this.onShowAllFilterClick}>Show All </span>
                    <span className={`filter ${this.state.number === 2 ? 'active' : ''} `} onClick={this.onIsActiveFilterClick}>Active</span>
                    <span className={`filter ${this.state.number === 3 ? 'active' : ''}`} onClick={this.onIsCompltedFilterClick}> Completed</span>
                </div>
            </Container >
        );
    }
}
const mapStateToPros = state => ({
    todo: state.todo.todo,
    currentFilter: state.todo.currentFilter
})
const mapDisptachToProps = dispatch => ({
    addTodo: title => dispatch(actions.addTodo(title)),
    removeTodo: id => dispatch(actions.removeTodo(id)),
    checkTodo: (id, isChecked) => dispatch(actions.checkTodo(id, isChecked)),
    updateTodo: (id, todo) => dispatch(actions.updateTodo(id, todo)),
    showAll: () => dispatch(actions.showAll()),
    isActive: () => dispatch(actions.isActive()),
    isComplete: () => dispatch(actions.isComplete()),

})


export default connect(mapStateToPros, mapDisptachToProps)(withStyles(styles)(Todo));