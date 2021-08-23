import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { clearErrors } from "../../redux/actions/roomActions";
import { Fragment } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import RoomFeatures from "./roomFeatures";

const RoomDetails = ({ title }) => {
  const dispatch = useDispatch();
  const { room, error } = useSelector((state) => state.room);
  console.log(room);
  useEffect(() => {
    toast.error(error);
    dispatch(clearErrors());
  }, []);
  return (
    <Fragment>
      <Head>
        <title>{room ? room.name : title}</title>
      </Head>

      <div className="container container-fluid">
        <h2 className="mt-5">{room.name}</h2>

        <div className="ratings mt-auto mb-3">
          <div className="rating-outer">
            <div
              className="rating-inner"
              style={{ width: `${(room.rating / 5) * 100}` }}
            ></div>
          </div>
          <span id="no_of_reviews">({room.reviews.length} Reviews)</span>
        </div>

        <Carousel hover="pause">
          {room.images.map((image) => (
            <CarouselItem key={image.public_id}>
              <div style={{ width: "100%", height: "440px" }}>
                <Image
                  className="d-block m-auto"
                  src={image.url}
                  alt={room.name}
                  layout="fill"
                />
              </div>
            </CarouselItem>
          ))}
        </Carousel>
        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>{room.description}</p>

            <RoomFeatures room={room} />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="booking-card shadow-lg p-4">
              <p className="price-per-night">
                <b>${room.pricePerNight}</b> / night
              </p>

              <button className="btn btn-block py-3 booking-btn">Pay</button>
            </div>
          </div>
        </div>

        <div className="reviews w-75">
          <h3>Reviews:</h3>
          <hr />
          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>

          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RoomDetails;