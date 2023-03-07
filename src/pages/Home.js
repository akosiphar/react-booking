import { Fragment } from "react";
import Banner from '../components/Banner';
import Highlights from '../components/Highlight';
import CourseCard from '../components/CourseCard';

export default function home() {
    return(
        <Fragment>
            <Banner />
            <Highlights />
            <CourseCard />
        </Fragment>
    )
}