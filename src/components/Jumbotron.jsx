import React from 'react';
import image1 from '../images/image1.png';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.png';

const Jumbotron = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>New Videos</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Hot Artist and Writers</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Upcoming Events</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    );
};

export default Jumbotron;