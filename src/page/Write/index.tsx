import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { StyledWriteContainer } from "./styled";
import { CameraOutlined, PictureOutlined } from "@ant-design/icons";
import { Post } from "./api";
import useGeolocation from "react-hook-geolocation";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import ScrollToTop from "../../components/Scroll";

export const Write = () => {
  const navigate = useNavigate();
  const geolocation = useGeolocation();
  const [share, setShare] = useState(0);
  const [error, setError] = useState("");
  const [position, setPosition] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
  const [submitLoding, setSubmitLoding] = useState(false);

  const [detailImages, setDetailImages] = useState<any>([]); // 프리뷰 보여줄 이미지 데이터

  const uploadFile = (event: any) => {
    setError("");
    let fileArr = event.target.files; //  사용자가 선택한 파일들
    let fileURLs: any[] = [];
    let filesLength = fileArr.length > 10 ? 10 : fileArr.length; // 최대 10개

    // 프리뷰
    for (let i = 0; i < filesLength; i++) {
      let file = fileArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs.push(reader.result);
        setDetailImages([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if (geolocation.latitude !== null) {
      setPosition({
        lat: geolocation.latitude,
        lng: geolocation.longitude,
      });
    }
  }, [geolocation]);

  const Validata = (e: any) => {
    e.preventDefault();

    if (!e.target.imageFile.files.length)
      return setError("⚠️  사진이 포함되어야 합니다.");
    if (!e.target.content.value) return setError("⚠️  내용이 없습니다.");
    return mutate(e);
  };

  const { mutate } = useMutation(Post, {
    onMutate: (data) => {
      //시작
      console.log(data);
      setSubmitLoding(true);
    },
    onError: (error: Error) => {
      setError(error.message);
    },
    onSuccess: () => {},
    onSettled: () => {
      //종료
      setSubmitLoding(false);
      navigate("/");
    },
  });

  return (
    <>
      <ScrollToTop />

      <Header title="우연 공유" vis_goBack={true} />
      <StyledWriteContainer>
        <form encType="multipart/form-data" onSubmit={Validata}>
          <div className="inputSection">
            <div className="noti">
              <div>
                <PictureOutlined /> {detailImages.length} / 10
              </div>
              <div className="divider"></div>
              <div>사진을 터치하여 삭제</div>
            </div>
          </div>
          <div
            className="inputSection options"
            style={{ display: detailImages.length ? "none" : "block" }}
          >
            <label className="attach" htmlFor="imageFile">
              <CameraOutlined /> 사진 선택하기
              <input
                type="file"
                id="imageFile"
                name="imageFile"
                accept="image/*"
                multiple
                onChange={uploadFile}
              />
            </label>
          </div>
          {detailImages.length !== 0 && (
            <div className="previewContainer">
              {detailImages
                .slice(0)
                .reverse()
                .map((url: string, index: number) => {
                  return (
                    <img
                      alt="미리보기"
                      key={index}
                      src={url}
                      onClick={() =>
                        setDetailImages(
                          detailImages.filter((item: any) => item !== url)
                        )
                      }
                    />
                  );
                })}
            </div>
          )}
          {detailImages.length !== 0 && (
            <>
              <div className="inputSection">
                <textarea
                  name="content"
                  placeholder="어떤 일이 일어났나요?"
                ></textarea>
              </div>
              <div className="inputSection options">
                <div>친구에게만 공유</div>
                <label
                  className="friend"
                  onClick={() => setShare((prev) => (prev ? 0 : 1))}
                  style={{ backgroundColor: share ? "#e3b719" : "#ddd" }}
                >
                  <div
                    className="toggle"
                    style={{ left: share ? "100%" : "50%" }}
                  ></div>
                </label>
                <input type="text" name="friend" value={share} readOnly />
                <input
                  type="text"
                  name="latitude"
                  value={position?.lat}
                  readOnly
                />
                <input
                  type="text"
                  name="longitude"
                  value={position?.lng}
                  readOnly
                />
              </div>
            </>
          )}

          <div className="inputSection err">
            {error && <div className="errMsg">{error}</div>}
          </div>

          <div className="inputSection submit">
            <button onClick={() => navigate("/")}>취소</button>
            <button
              type="submit"
              className="submit"
              disabled={submitLoding ? true : false}
            >
              작성하기
            </button>
          </div>
        </form>
      </StyledWriteContainer>
    </>
  );
};
