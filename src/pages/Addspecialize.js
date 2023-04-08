import React from 'react';
import CustomInput from '../components/CustomInput';

export const Addspecialize = () => {
  return (
    <div>
            <h3 className="mb-4 title">Add Doctor Specialization</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Doctor Specialization" />
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        Add Product Brand
                    </button>
                </form>
            </div>
        </div>
  )
}
