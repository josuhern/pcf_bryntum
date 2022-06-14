# Bryntum Scheduler 

## Starting from scratch

*Using npm*

```
pac pcf init -ns SampleNamespace -n Bryntum -t dataset -npm
npm install react@latest react-dom@latest
npm install @fluentui/react@latest
npm config set "@bryntum:registry=https://npm.bryntum.com"
npm login --registry=https://npm.bryntum.com
$ Username: user..yourdomain.com
$ Password: trial
$ Email: (this IS public) user@yourdomain.com
npm install @bryntum/demo-resources@1.1.0
npm install @bryntum/scheduler-trial@5.0.5
npm install @bryntum/scheduler-react@5.0.5
```
### Make sure your package.json looks like this
```
    "@bryntum/demo-resources": "1.1.0",
    "@bryntum/scheduler-react": "5.0.5",
    "@bryntum/scheduler": "npm:@bryntum/scheduler-trial@5.0.5",
```

### Make sure your tsconfig.json looks like this
```
{
    "extends": "./node_modules/pcf-scripts/tsconfig_base.json",
    "compilerOptions": {
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "typeRoots": ["node_modules/@types"],
    }
}
```

### How to add resourses in control manifest
```
    <resources>
      <code path="index.ts" order="1"/>
      <css path="css/scheduler.classic-light.css" order="1" />
      <css path="css/Bryntum.css" order="1" />
      <css path="css/fonts/fa-solid-900.ttf" order="1" />
      <css path="css/fonts/fa-solid-900.woff2" order="1" />
      <!-- UNCOMMENT TO ADD MORE RESOURCES
      <resx path="strings/Bryntum.1033.resx" version="1.0.0" />
      -->
    </resources>
```