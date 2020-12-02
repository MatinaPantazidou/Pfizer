import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditPost = (props) => {
    const { id } = useParams();
    const { register, handleSubmit, errors, setValue } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:3001/courses/${id}`).then(result => {
            setValue("id", result.data.id);
            setValue("title", result?.data.title);
            setValue("imagePath", result.data.imagePath);
            setValue("price.normal", result.data.price?.normal);
            setValue("price.early_bird", result.data.price?.early_bird);
            setValue("dates.start_date", result.data.dates?.start_date);
            setValue("dates.end_date", result.data.dates?.end_date);
            setValue("duration", result.data.duration);
            setValue("instructors", result.data.instructors);
            setValue("description", result.data.description);
        })
    }, [id, setValue]);

    const onSubmit = data => {
        axios.put(`http://localhost:3001/courses/${id}`, data).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Update Course</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>ID</label>
                            <input type="text" readOnly className="form-control" name="id" ref={register({ required: false })} />
                        </div>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" name="title" ref={register({ required: false })} />
                            <small className="form-text text-danger">{errors.title && 'Invalid'}</small>
                        </div>
                        <div className="form-group">
                            <label>Image path</label>
                            <input type="text" className="form-control" name="imagePath" ref={register({ required: false })} />
                            <small className="form-text text-danger">{errors.imagePath && 'Invalid'}</small>
                        </div>
                        <div className="form-group">
                            <label>Price (normal)</label>
                            <input type="text" className="form-control" name="price.normal" ref={register({ required: false })} />
                            <small className="form-text text-danger">{errors.price?.normal && 'Invalid'}</small>
                        </div>
                        <div className="form-group">
                            <label>Price (early bird)</label>
                            <input type="text" className="form-control" name="price.early_bird" ref={register({ required: false })} />
                            <small className="form-text text-danger">{errors.price?.early_bird && 'Invalid'}</small>
                        </div>
                        <div className="form-group">
                            <label>Dates (start date)</label>
                            <input type="text" className="form-control" name="dates.start_date" ref={register({ required: false })} />
                            <small className="form-text text-danger">{errors.dates?.start_date && 'Invalid'}</small>
                        </div>
                        <div className="form-group">
                            <label>Dates (end date)</label>
                            <input type="text" className="form-control" name="dates.end_date" ref={register({ required: false })} />
                            <small className="form-text text-danger">{errors.dates?.end_date && 'Invalid'}</small>
                        </div>
                        <div className="form-group">
                            <label>Duration</label>
                            <input type="text" className="form-control" name="duration" ref={register({ required: false })} />
                            <small className="form-text text-danger">{errors.duration && 'Invalid'}</small>
                        </div>
                        <div className="form-group">
                            <label>Instructors</label>
                            <input type="text" className="form-control" name="instructors" ref={register({ required: false })} />
                            <small className="form-text text-danger">{errors.instructors && 'Invalid'}</small>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea name="description" cols="30" rows="10" className="form-control" ref={register({ required: false })}></textarea>
                            <small className="form-text text-danger">{errors.description && 'Invalid'}</small>
                        </div>

                        <Link to="/" className="btn btn-primary">Cancel</Link>
                        &nbsp;
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditPost;