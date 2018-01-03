import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseAction';
import {bindActionCreators} from 'redux';
import CourseList from './courseList';

class course extends React.Component {

        constructor(props,context) {
            super(props,context);

          
        }

      

        courseRow(course,index){

          
            
           
            return (
                <li key={index} >
                {course.title}
                {/* <button type="submit" className="btn btn-sm btn-danger" onClick={this.handleClick.bind(this, course)}>click {course.title}</button>
            */}
            </li>
            
           )
        }
        handleClick(a) {
            console.log(a);
}

    render(){
        console.log('rendered');
        
        // var items = this.props.courses.map(function(a, i) {
        //     return (
        //         <li key={i} onClick={this.handleClick.bind(this, a)}>
        //             {a.title}
        //         </li>
        //         );
        // }, this);
        // var items = this.props.courses.map(this.courseRow , this);
        const {courses} = this.props;
        
        return(
            <div>
               <h2>Course Page</h2>

               {/*{this.props.courses.map(this.courseRow ,this)}*/}
               {/* {items} */}

               <CourseList courses={courses}/>

              
            </div>

        );

    }
}

course.PropTypes={
    
    //dispatch: PropTypes.func.isRequired,
    //course: PropTypes.array.isRequired
    //createCourse: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
}
function mapStateToProps(state , ownProps){
    //this is used to set values as props in this high level container component
//state represents state within our redux store so v can access redux store frm here
//state.courses is which is defined in root reducer
//ownProps -- refrence 2 components own props
    return {
        courses : state.courses
    };
}

//this checkes wat actn r availabel or 2 be dispatched in components
function mapDispatchToProps(dispatch){
    return {
        //createCourse : (course)=> dispatch(courseActions.createCourse(course))//bindactn creator simplify this
        actions : bindActionCreators(courseActions,dispatch)
        //createCourse : bindActionCreators(courseActions.createCourse(),dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(course);
