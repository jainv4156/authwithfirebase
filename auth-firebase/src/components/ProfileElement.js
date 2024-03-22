import React from "react";

export default function ProfileElement(props) {
  // const[firstname,lastname]=props
  const page = props.page;
  return (
    <div>
      {page === 1 && (
        <>
          <div className="mb-3">
            <label className="form-label">firstname</label>
            <input
              type="text"
              className="form-control"
              value={props.profileDetail.firstname}
              onChange={(e) =>
                props.setProfileDetail({
                  ...props.profileDetail,
                  ["firstname"]: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Lastname</label>
            <input
              type="text"
              className="form-control"
              value={props.profileDetail.lastname}
              onChange={(e) =>
                props.setProfileDetail({
                  ...props.profileDetail,
                  ["lastname"]: e.target.value,
                })
              }
            />
          </div>
        </>
      )}

      {page === 2 && (
        <>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={props.profileDetail.email}
              onChange={(e) =>
                props.setProfileDetail({
                  ...props.profileDetail,
                  ["email"]: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">mobile</label>
            <input
              type="number"
              className="form-control"
              value={props.profileDetail.phoneNo}
              onChange={(e) =>
                props.setProfileDetail({
                  ...props.profileDetail,
                  ["phoneNo"]: e.target.value,
                })
              }
            />
          </div>
        </>
      )}
      {page === 3 && (
        <>
          <div className="mb-3">
            <label className="form-label">age</label>
            <input
              type="number"
              className="form-control"
              value={props.profileDetail.age}
              onChange={(e) =>
                props.setProfileDetail({
                  ...props.profileDetail,
                  ["age"]: e.target.value,
                })
              }
            />
          </div>
        </>
      )}
      {page === 4 && (
        <>
          <div className="mb-3">
            <label className="form-label">education</label>
            <input
              type="text"
              className="form-control"
              value={props.profileDetail.education}
              onChange={(e) =>
                props.setProfileDetail({
                  ...props.profileDetail,
                  ["education"]: e.target.value,
                })
              }
            />
          </div>
        </>
      )}
      {page === 5 && (
        <>
          <div className="mb-3">
            <label className="form-label">Occupation</label>
            <input
              type="text"
              className="form-control"
              value={props.profileDetail.occupation}
              onChange={(e) =>
                props.setProfileDetail({
                  ...props.profileDetail,
                  ["occupation"]: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Hobby</label>
            <input
              type="text"
              className="form-control"
              value={props.profileDetail.hobby}
              onChange={(e) =>
                props.setProfileDetail({
                  ...props.profileDetail,
                  ["hobby"]: e.target.value,
                })
              }
            />
          </div>
        </>
      )}
      {page === 6 && (
        <>
          <div className="mb-3">
            <label className="form-label">address</label>
            <input
              type="text"
              className="form-control"
              value={props.profileDetail.address}
              onChange={(e) =>
                props.setProfileDetail({
                  ...props.profileDetail,
                  ["address"]: e.target.value,
                })
              }
            />
          </div>
        </>
      )}
      {page === 7 && (
        <>
          <div className="mb-3">
            <label className="form-label">Bio</label>
            <textarea

              className="form-control"
              value={props.profileDetail.bio}
              onChange={(e) =>
                props.setProfileDetail({
                  ...props.profileDetail,
                  ["bio"]: e.target.value,
                })
                
              }
              rows={5}
            />
          </div>
        </>
      )}
    </div>
  );
}
