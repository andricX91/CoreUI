# CoreUI for Angular

CoreUI for Angular is a library of reusable, customizable Angular components and utilities designed to speed up development and streamline application delivery. Built on Angular's robust framework, CoreUI provides developers with a flexible foundation for crafting modern, responsive, and efficient web applications.

---

## Features

- **Pre-built Angular Components**: A rich set of ready-to-use UI components for building fast and scalable applications.
- **Responsive Design**: Ensures your applications look great on any screen size.
- **Customizable**: Easily adaptable to meet your specific requirements with minimal effort.
- **Performance-Focused**: Optimized for fast rendering and reduced load times.
- **Active Community Support**: Continuous updates and support from an active developer community.

---

## Installation

To get started with CoreUI for Angular, install the library via npm:

```bash
npm install @coreui/angular
```

---

## Getting Started

1. Import the CoreUI module in your Angular application:

    ```typescript
    import { CoreUIModule } from '@coreui/angular';

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        CoreUIModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

2. Include CoreUI styles in your project by adding the following line to your `angular.json` file under the `styles` array:

    ```json
    "styles": [
      "node_modules/@coreui/coreui/dist/css/coreui.min.css"
    ]
    ```

3. Use CoreUI components in your templates:

    ```html
    <cui-button color="primary">Click Me</cui-button>
    ```

---

## Documentation

For detailed documentation, examples, and usage instructions, please visit the [CoreUI for Angular Documentation](https://coreui.io/angular).

---

## Contributing

We welcome contributions! To contribute, please:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request.

---

## Support

If you encounter any issues or have questions, please reach out through the [GitHub Issues](https://github.com/coreui/coreui-angular/issues) or contact our support team.

---

## License

CoreUI for Angular is open-source software licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## About CoreUI

CoreUI is a full-featured suite of open-source components and templates designed for building modern web applications. With versions available for multiple frameworks, CoreUI empowers developers to deliver high-quality applications faster.

---

### Stay Connected

- Website: [https://coreui.io](https://coreui.io)
- Twitter: [@core_ui](https://twitter.com/core_ui)
- GitHub: [CoreUI GitHub](https://github.com/coreui/coreui-angular)

---
