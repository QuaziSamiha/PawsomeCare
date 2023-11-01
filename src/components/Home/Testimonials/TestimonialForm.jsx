import { useState } from "react";

const TestimonialForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({});

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const customerName = form.customerName.value;
    const animalType = form.animalType.value;
    const serviceType = form.serviceType.value;
    const review = form.review.value;
    const newReview = { date, customerName, animalType, serviceType, review };
    // console.log(newReview);
    setFormData(newReview);
    // You can handle form submission or further processing here
  };
  // console.log(formData);
  return (
    <>
      <div className="">
        <div className="bg-[#fff5ed] border border-[#e0a287] text-gray-500 rounded-md mx-6 my-4 px-6 py-3 h-72 text-start text-sm sm:text-base animate-pulse">
          <form onSubmit={handleForm}>
            <div className="mb-2">
              <div className="">
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="border rounded-md p-1 w-full outline-0 bg-[#fff5ed]"
                />
              </div>
            </div>
            <div className="mb-2">
              <div className="">
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  placeholder="Customer Name..."
                  className="border rounded-md p-1 w-full outline-0 bg-[#fff5ed]"
                />
              </div>
            </div>
            <div className="mb-2 flex">
              <div className="mr-2 w-52">
                <select
                  name="animalType"
                  id="animalType"
                  className="border rounded-md p-1 w-full outline-0 bg-[#fff5ed]"
                >
                  <option>Select Animal</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="rabbit">Rabbit</option>
                  <option value="bird">Bird</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="ml-2">
                <select
                  name="serviceType"
                  id="serviceType"
                  className="border rounded-md p-1 w-full outline-0 bg-[#fff5ed]"
                >
                  <option value="">Select Service</option>
                  <option value="online_pet_shop">Online Pet Shop</option>
                  <option value="veterinary_care">Veterinary Care</option>
                  <option value="pet_day_care_boarding">
                    Pet Day Care & Boarding
                  </option>
                  <option value="stray_animal_rescue">
                    Stray Animal Rescue
                  </option>
                  <option value="pet_training_programs">
                    Pet Training Programs
                  </option>
                </select>
              </div>
            </div>

            <div className="mb-1">
              <textarea
                id="review"
                name="review"
                placeholder="comment here..."
                className="border rounded-md p-1 w-full h-24 outline-0 bg-[#fff5ed]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#ffcc9d] py-1.5 rounded text-blue-900 font-medium text-base w-full"
            >
              Review
            </button>
          </form>
        </div>
      </div>{" "}
    </>
  );
};

export default TestimonialForm;
