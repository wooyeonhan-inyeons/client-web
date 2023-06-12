import { WrapperOptInterface } from "./component/MainWrapper/interface";

export interface UserState {
  role: "GUEST" | "USER" | "ADMIN";
  user_id: string;
  name: string;
  first: boolean;
  create_at: string;
  access_token?: string;
  email?: string;
}

export type themeType = "system" | "light" | "dark";
export interface EnvState {
  theme: themeType;
  backNoti: boolean;
}

export interface menuProps {
  key: string;
  value: string;
}

export interface ThemeProps {
  theme?: Theme;
}

export interface HeaderOptinterface {
  menus: menuProps[];
  fn_L?: () => void;
  fn_R?: () => void;
  icon_L?: Icon;
  icon_R?: Icon | AvatarComponent;
  isForward?: boolean;
  headerType?: "V1" | "V2" | "V3";
  bgColor?: string;
  contentColor?: string;
}

type SetHeadType = Dispatch<SetStateAction<HeaderOptinterface>>;

type SetWrapperType = React.Dispatch<React.SetStateAction<WrapperOptInterface>>;

export interface ContextInterface {
  headOpt?: HeaderOptinterface;
  setHeadOpt: SetHeadType;
  navigate?: NavigateFunction;
  setWrapperOpt: SetWrapperType;
  setCategory?: Dispatch<SetStateAction<string>>;
  shaking: boolean;
  setShaking: Dispatch<SetStateAction<boolean>>;
  post: UploadPostType | null;
  setPost: React.Dispatch<React.SetStateAction<UploadPostType | null>>;
  initPosition: LocationProps;
  initGeocode: string;
  // 정리 부탁

  Map: MapContextType | undefined;
  mapboxgl: object;
  user: userState;
}

export interface onlyNavigateInterface {
  navigate?: NavigateFunction;
}

export interface LocationProps {
  latitude: number | undefined;
  longitude: number | undefined;
  zoom: number;
}

// INFO, PRESENT, GROUP, EVENT, DAILY, ADS
export type WooyeonsCategory =
  | "DAILY"
  | "GROUP"
  | "ADS"
  | "INFO"
  | "EVENT"
  | "PRESENT";

export type RangeType = 1 | 50 | 100;

export interface FilterState {
  searchRange: RangeType;
  preferCategory: Array<WooyeonsCategory>;
}

type MapContextType = React.ForwardRefExoticComponent<
  Partial<import("..").ViewState> & {
    mapboxAccessToken?: string;
    initialViewState?: Partial<import("..").ViewState> & {
      bounds?: import("mapbox-gl").LngLatBoundsLike;
      fitBoundsOptions?: import("mapbox-gl").FitBoundsOptions;
    };
    gl?: WebGLRenderingContext;
    antialias?: boolean;
    attributionControl?: boolean;
    bearingSnap?: number;
    clickTolerance?: number;
    collectResourceTiming?: boolean;
    cooperativeGestures?: boolean;
    crossSourceCollisions?: boolean;
    customAttribution?: string | string[];
    fadeDuration?: number;
    failIfMajorPerformanceCaveat?: boolean;
    hash?: string | boolean;
    interactive?: boolean;
    locale?: {
      [key: string]: string;
    };
    localFontFamily?: string;
    localIdeographFontFamily?: string;
    logoPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    maxTileCacheSize?: number;
    optimizeForTerrain?: boolean;
    pitchWithRotate?: boolean;
    preserveDrawingBuffer?: boolean;
    refreshExpiredTiles?: boolean;
    testMode?: boolean;
    trackResize?: boolean;
    transformRequest?: import("mapbox-gl").TransformRequestFunction;
    boxZoom?: boolean;
    doubleClickZoom?: boolean;
    dragPan?: boolean | import("mapbox-gl").DragPanOptions;
    dragRotate?: boolean;
    keyboard?: boolean;
    scrollZoom?: boolean | import("mapbox-gl").InteractiveOptions;
    touchPitch?: boolean;
    touchZoomRotate?: boolean | import("mapbox-gl").InteractiveOptions;
    maxBounds?: import("mapbox-gl").LngLatBoundsLike;
    maxPitch?: number;
    maxZoom?: number;
    minPitch?: number;
    minZoom?: number;
    viewState?: import("..").ViewState & {
      width: number;
      height: number;
    };
    mapStyle?: string | import("mapbox-gl").Style | import("..").ImmutableLike;
    styleDiffing?: boolean;
    fog?: import("mapbox-gl").Fog;
    light?: import("mapbox-gl").Light;
    terrain?: import("mapbox-gl").TerrainSpecification;
    interactiveLayerIds?: string[];
    projection?: string | import("..").ProjectionSpecification;
    renderWorldCopies?: boolean;
    cursor?: string;
    onMouseDown?: (e: import("mapbox-gl").MapLayerMouseEvent) => void;
    onMouseUp?: (e: import("mapbox-gl").MapLayerMouseEvent) => void;
    onMouseOver?: (e: import("mapbox-gl").MapLayerMouseEvent) => void;
    onMouseMove?: (e: import("mapbox-gl").MapLayerMouseEvent) => void;
    onClick?: (e: import("mapbox-gl").MapLayerMouseEvent) => void;
    onDblClick?: (e: import("mapbox-gl").MapLayerMouseEvent) => void;
    onMouseEnter?: (e: import("mapbox-gl").MapLayerMouseEvent) => void;
    onMouseLeave?: (e: import("mapbox-gl").MapLayerMouseEvent) => void;
    onMouseOut?: (e: import("mapbox-gl").MapLayerMouseEvent) => void;
    onContextMenu?: (e: import("mapbox-gl").MapLayerMouseEvent) => void;
    onTouchStart?: (e: import("mapbox-gl").MapLayerTouchEvent) => void;
    onTouchEnd?: (e: import("mapbox-gl").MapLayerTouchEvent) => void;
    onTouchMove?: (e: import("mapbox-gl").MapLayerTouchEvent) => void;
    onTouchCancel?: (e: import("mapbox-gl").MapLayerTouchEvent) => void;
    onMoveStart?: (e: import("..").ViewStateChangeEvent) => void;
    onMove?: (e: import("..").ViewStateChangeEvent) => void;
    onMoveEnd?: (e: import("..").ViewStateChangeEvent) => void;
    onDragStart?: (e: import("..").ViewStateChangeEvent) => void;
    onDrag?: (e: import("..").ViewStateChangeEvent) => void;
    onDragEnd?: (e: import("..").ViewStateChangeEvent) => void;
    onZoomStart?: (e: import("..").ViewStateChangeEvent) => void;
    onZoom?: (e: import("..").ViewStateChangeEvent) => void;
    onZoomEnd?: (e: import("..").ViewStateChangeEvent) => void;
    onRotateStart?: (e: import("..").ViewStateChangeEvent) => void;
    onRotate?: (e: import("..").ViewStateChangeEvent) => void;
    onRotateEnd?: (e: import("..").ViewStateChangeEvent) => void;
    onPitchStart?: (e: import("..").ViewStateChangeEvent) => void;
    onPitch?: (e: import("..").ViewStateChangeEvent) => void;
    onPitchEnd?: (e: import("..").ViewStateChangeEvent) => void;
    onWheel?: (e: import("mapbox-gl").MapWheelEvent) => void;
    onBoxZoomStart?: (e: import("mapbox-gl").MapBoxZoomEvent) => void;
    onBoxZoomEnd?: (e: import("mapbox-gl").MapBoxZoomEvent) => void;
    onBoxZoomCancel?: (e: import("mapbox-gl").MapBoxZoomEvent) => void;
    onResize?: (e: import("mapbox-gl").MapboxEvent<undefined>) => void;
    onLoad?: (e: import("mapbox-gl").MapboxEvent<undefined>) => void;
    onRender?: (e: import("mapbox-gl").MapboxEvent<undefined>) => void;
    onIdle?: (e: import("mapbox-gl").MapboxEvent<undefined>) => void;
    onError?: (e: import("mapbox-gl").ErrorEvent) => void;
    onRemove?: (e: import("mapbox-gl").MapboxEvent<undefined>) => void;
    onData?: (
      e:
        | import("mapbox-gl").MapSourceDataEvent
        | import("mapbox-gl").MapStyleDataEvent
    ) => void;
    onStyleData?: (e: import("mapbox-gl").MapStyleDataEvent) => void;
    onSourceData?: (e: import("mapbox-gl").MapSourceDataEvent) => void;
  } & GlobalSettings & {
      mapLib?: any;
      reuseMaps?: boolean;
      /** Map container id */
      id?: string;
      /** Map container CSS style */
      style?: CSSProperties;
      children?: any;
    } & React.RefAttributes<MapRef>
>;
