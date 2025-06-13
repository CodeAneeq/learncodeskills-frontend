import React from "react";
import PageLayout from "../../../components/layouts/PageLayout";
import styles from "./AddCourse.module.scss";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import { ContactInput } from "../../../components/inputs/ContactInput";
import PrimaryBtn from "../../../components/buttons/PrimaryBtn";
import { useState } from "react";
import axios from "axios";
import baseURL from "../../../services/Constant";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [authError, setAuthError] = useState("");
  const [loader, setLoader] = useState(false);
  const [role, setRole] = useState("student");
  const [thumbnail, setThumbnail] = useState(null); // ✅ new state
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(""); // ✅ new state
  const [level, setLevel] = useState(""); // ✅ new state
  const navigate = useNavigate()

  const createCourse = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subTitle", subTitle);
      formData.append("description", description);
      formData.append("role", role);
      formData.append("level", level);
      formData.append("price", price);
      formData.append("category", category);
      if (thumbnail) formData.append("thumbnail", thumbnail);
      let token = localStorage.getItem("token");
      const response = await axios.post(
        `${baseURL}/course/api/add-course`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let courseId = response?.data?.data?._id;
      console.log(courseId);
      setLoader(false);
      navigate(`/instructor/add-lecture/${courseId}`);
    } catch (error) {
      setAuthError(error?.response?.data?.message);
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
    }
  };
  return (
    <PageLayout>
      <div className={`${styles.add_course_container}`}>
        <div className={`${styles.sidebar}`}>
          <AdminSidebar />
        </div>
        <div className={` ${styles.content} container`}>
          <div className={`${styles.topBar}`}>
            <div className={styles.headingGroup}>
              <h3>Add Course</h3>
              <p>Add Further details information regarding course</p>
            </div>
            <div className={`${styles.btns}`}>
              <div className={`${styles.btn}`}>
                <PrimaryBtn>Publish</PrimaryBtn>
              </div>
              <div className={`${styles.btn}`}>
                <PrimaryBtn onClick={createCourse}>Draft</PrimaryBtn>
              </div>
            </div>
          </div>

          <div className={`${styles.main_course_box}`}>
            <h6>Basic Information</h6>
            <p>Make Changes to your courses here. Click save when you done</p>
            <div className={`${styles.inputs_div}`}>
              <label>Title</label>
              <ContactInput name={title} value={title} onChange={(e) => setTitle(e.target.value)} placeholder={"Enter Title"} />
              <label style={{ marginTop: "20px" }}>Sub Title</label>
              <ContactInput name={subTitle} value={subTitle} onChange={(e) => setSubTitle(e.target.value)} placeholder={"Enter Sub Title"} />
              <label style={{ marginTop: "20px", marginBottom: "10px" }}>
                Description
              </label>
              <textarea
                name={description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`${styles.desc_text_area}`}
                placeholder="Enter Description"
              ></textarea>
              <label style={{ marginTop: "20px" }}>Category</label>
              <ContactInput name={category} value={category} onChange={(e) => setCategory(e.target.value)} placeholder={"Enter Category"} />
              <div className={`${styles.two_option}`}>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="level">Select Level</label>
                  <select
                    id="level"
                    name="level"
                      value={level} // 👈 selected value
  onChange={(e) => setLevel(e.target.value)} 
                    className={`${styles.custom_select}`}
                  >
                    <option value="">-- Choose Level --</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label style={{ marginTop: "20px" }}>Price in PKR</label>
                  <ContactInput name={price} value={price} onChange={(e) => setPrice(e.target.value)} placeholder={"Enter Price"} />
                </div>
              </div>
              {/* ✅ Profile Image Upload */}
              <div className={`${styles.thumbnail_input_container} mt-4`}>
                <label htmlFor="thumbnail" className={`${styles.input_label}`}>
                  Course Thumbnail
                </label>
                <input
                  id="thumbnail"
                  name="thumbnail"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={`${styles.custom_file_input}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AddCourse;
