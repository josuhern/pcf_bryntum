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
ControlManifest.Input.xml
```
    <resources>
      <code path="index.ts" order="1"/>
      <css path="css/scheduler.classic-light.css" order="1" />
      <css path="css/Bryntum.css" order="1" />
      <!-- Not able to deploy fonts but used locally
      <css path="css/fonts/fa-solid-900.ttf" order="1" />
      <css path="css/fonts/fa-solid-900.woff2" order="1" />
      -->
    </resources>
```

### Adding data set
ControlManifest.Input.xml
```
 <data-set name="items" display-name-key="Items">
      <property-set name="fullname" display-name-key="Full Name" of-type="SingleLine.Text" usage="bound" required="true" />
      <property-set name="title" display-name-key="Title" of-type="SingleLine.Text" usage="bound" required="true" />
    </data-set>
```


### Passing dataset to React Control
index.ts

```
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        // Add code to update control view

        const isTestHarness = document.getElementById('control-dimensions') !== null;
        const dataset = context.parameters.items;
        const datasetChanged = context.updatedProperties.indexOf('dataset') > -1;
        if (datasetChanged || isTestHarness) {
            this.items = dataset.sortedRecordIds.map((id) => {
                const record = dataset.records[id];
                return {
                    id: record.getRecordId(),
                    fullname: record.getValue('fullname') as string,
                    title: record.getValue('title') as string,
                } as IBookableResouce;
            });
        }

        ReactDOM.render(
            React.createElement(BryntumCalendar, {items: this.items}),
            this.container,
        );
    }
```
