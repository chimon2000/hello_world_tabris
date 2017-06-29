import {
    Action as TAction,
    ActionProperties,
    ActivityIndicator as TActivityIndicator,
    ActivityIndicatorProperties,
    Button as TButton,
    ButtonProperties,
    Canvas as TCanvas,
    CanvasProperties,
    CollectionView as TCollectionView,
    CollectionViewProperties,
    CompositeProperties,
    Drawer as TDrawer,
    DrawerProperties,
    ImageView as TImageView,
    ImageViewProperties,
    NavigationView as TNavigationView,
    NavigationViewProperties,
    Page as TPage,
    PageProperties,
    Picker as TPicker,
    PickerProperties,
    ProgressBar as TProgressBar,
    ProgressBarProperties,
    RadiButton as TRadioButton,
    RadioButtonProperties,
    ScrollViewProperties,
    SearchActionProperties,
    SliderProperties,
    StatusBarProperties,
    SwitchProperties,
    TabFolderProperties,
    TabProperties,
    TextInputProperties,
    TextViewProperties,
    ToggleButtonProperties,
    VideoProperties,
    WebViewProperties,
    WidgetProperties
} from 'tabris'
import * as tabris from 'tabris'

function createElement(element, props: WidgetProperties = {}, children?) {
    let Type = tabris[element]

    let result = new Type(props)

    if (!(result instanceof tabris.Widget)) {
        throw new Error(('JSX: Unsupported type ' + Type.name).trim())
    }

    if (result instanceof tabris.Composite) {
        result.append.apply(result, children)
    }

    return result as any
}

const Elements = {
    Page: 'Page',
    WebView: 'WebView',
    ScrollView: 'ScrollView',
    TabFolder: 'TabFolder',
    Composite: 'Composite',
    NavigationView: 'NavigationView',
    CollectionView: 'CollectionView',
    Action: 'Action',
    TextView: 'TextView',
    ImageView: 'ImageView',
    Canvas: 'Canvas',
    Drawer: 'Drawer',
    ToggleButton: 'ToggleButton',
    Picker: 'Picker',
    Slider: 'Slider',
    Switch: 'Switch',
    TextInput: 'TextInput',
    StatusBar: 'StatusBar',
    ProgressBar: 'ProgressBar',
    RadioButton: 'RadioButton',
    SearchAction: 'SearchAction',
    Video: 'Video',
    ActivityIndicator: 'ActivityIndicator',
    Button: 'Button'
}

//Layout Components
export const Page = (props: PageProperties, children) => createElement(Elements.Page, props, children)
export const WebView = (props: WebViewProperties, children): tabris.WebView =>
    createElement(Elements.WebView, props, children)
export const ScrollView = (props: ScrollViewProperties, children): tabris.ScrollView =>
    createElement(Elements.ScrollView, props, children)
export const TabFolder = (props: TabFolderProperties, children): tabris.TabFolder =>
    createElement(Elements.TabFolder, props, children)
export const Tab = (props: TabProperties, children): tabris.Tab => createElement('Tab', props, children)
export const Composite = (props: CompositeProperties, children): tabris.Composite =>
    createElement(Elements.Composite, props, children)
export const Drawer = (props: DrawerProperties, children): tabris.Drawer =>
    createElement(Elements.Drawer, props, children)
export const NavigationView = (props: NavigationViewProperties, children): tabris.NavigationView =>
    createElement(Elements.NavigationView, props, children)
export const Canvas = (props: CanvasProperties, children): TCanvas => createElement(Elements.Canvas, props, children)
export const CollectionView = (props: CollectionViewProperties, children): TCollectionView =>
    createElement(Elements.CollectionView, props, children)

export const Action = (props: ActionProperties): TAction => createElement(Elements.Action, props)
export const TextView = (props: TextViewProperties): tabris.TextView => createElement(Elements.TextView, props)
export const ImageView = (props: ImageViewProperties): tabris.ImageView => createElement(Elements.ImageView, props)
export const Video = (props: VideoProperties): tabris.Video => createElement(Elements.Video, props)
export const Picker = (props: PickerProperties): tabris.Picker => createElement(Elements.Picker, props)
export const ProgressBar = (props: ProgressBarProperties): tabris.ProgressBar =>
    createElement(Elements.ProgressBar, props)
export const RadioButton = (props: RadioButtonProperties): TRadioButton => createElement(Elements.RadioButton, props)
export const SearchAction = (props: SearchActionProperties): tabris.SearchAction =>
    createElement(Elements.SearchAction, props)
export const Slider = (props: SliderProperties): tabris.Slider => createElement(Elements.Slider, props)
export const StatusBar = (props: StatusBarProperties): tabris.StatusBar => createElement(Elements.StatusBar, props)
export const Switch = (props: SwitchProperties): tabris.Switch => createElement(Elements.Switch, props)
export const ToggleButton = (props: ToggleButtonProperties): tabris.ToggleButton =>
    createElement(Elements.ToggleButton, props)
export const TextInput = (props: TextInputProperties): tabris.TextInput => createElement(Elements.TextInput, props)
export const ActivityIndicator = (props: ActivityIndicatorProperties): TActivityIndicator =>
    createElement(Elements.ActivityIndicator, props)
export const Button = (props: ButtonProperties): TButton => createElement(Elements.Button, props)
