# Demo Widget ScandiPWA Extension

This extension lets you use the Demo Widget, without making any code changes.

## Authors
* Mert Gulmus (mert.gulmus@scandiweb.com) *feel free to reach out*
* Artūrs Strucinskis (arturs.strucinskis@scandiweb.com)


## About ScandiPWA support
If your ScandiPWA version doesn't support using packages, you need to add the widget in ```root/scandipwa/src/component/WidgetFactory/WidgetFactory.component.js``` as we added in the WidgetFactory plugin file. Then you need to copy ```root/scandipwa/packages/demo-widget/src/component/DemoWidget``` folder into ```root/scandipwa/src/component``` folder. If you corrected all pathways, it should work without any problems.

## How to install
* Download this repository
* Copy both ```app``` and ```scandipwa``` folders into the project root folder and merge them with existing folders (*Both folders include pre-created pathways. They will work without any problems if you choose to merge. None of the files include anything to interfere with your project's files.)*
* Add the package as a dependency to ```root/scandipwa/package.json``` (*You must find the section looks like below and add the "@scandipwa" line*)
```
"dependencies": {
    "@scandipwa/demo-widget": "file:packages/demo-widget"
}
```
* Run ```cd scandipwa && npm install && cd ..``` on root folder
* After successful installation, make sure the package is enabled in ```root/scandipwa/package.json```'s ```extensions``` section
```
"extensions": {
    "@scandipwa/demo-widget": true
}
```
* Run ```yarn cli``` or ```npm run cli``` on the root folder to access Magento CLI
* Inside CLI, run ```magento setup:upgrade``` to start widget's creation script
* Check if ```Scandiweb_DemoWidget``` module is enabled in ```root/app/etc/config.php```
* After setup is completed, you should be able to see the widget in Magento admin panel (*Widget's name is Demo Widget*).
* You can use the widget
![Widget in Admin panel](https://i.imgur.com/iNXA2YL.png)


## How to edit

### ScandiPWA FE

You can find the widget's front-end files in ```root/scandipwa/packages/demo-widget/src/component/DemoWidget``` folder.


### Magento BE

BE root folder -> ```root/app/code/Scandiweb/DemoWidget```

```widget.xml``` : Main file to edit widget's parameters -> ```root/app/code/Scandiweb/DemoWidget/etc/widget.xml```
