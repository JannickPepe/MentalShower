'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ionic-app-base documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b594535da6e8adbe1c88350f9211d610f932ce00837d0c6d5249e6236a65a5a504529250601d4625199f3dbda10dcae1fdeddcd38a16af5cf5e3b4909333255b"' : 'data-target="#xs-components-links-module-AppModule-b594535da6e8adbe1c88350f9211d610f932ce00837d0c6d5249e6236a65a5a504529250601d4625199f3dbda10dcae1fdeddcd38a16af5cf5e3b4909333255b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b594535da6e8adbe1c88350f9211d610f932ce00837d0c6d5249e6236a65a5a504529250601d4625199f3dbda10dcae1fdeddcd38a16af5cf5e3b4909333255b"' :
                                            'id="xs-components-links-module-AppModule-b594535da6e8adbe1c88350f9211d610f932ce00837d0c6d5249e6236a65a5a504529250601d4625199f3dbda10dcae1fdeddcd38a16af5cf5e3b4909333255b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConditionInputPageModule.html" data-type="entity-link" >ConditionInputPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConditionInputPageModule-3e98b3c05d44fefe50aa01d8d948efdfb4169b9cee69c8d3c8d5978414b973768e467e5003db4d21776e2c4c60fa995580f84d8444bdc3397726eb263afaf9e9"' : 'data-target="#xs-components-links-module-ConditionInputPageModule-3e98b3c05d44fefe50aa01d8d948efdfb4169b9cee69c8d3c8d5978414b973768e467e5003db4d21776e2c4c60fa995580f84d8444bdc3397726eb263afaf9e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConditionInputPageModule-3e98b3c05d44fefe50aa01d8d948efdfb4169b9cee69c8d3c8d5978414b973768e467e5003db4d21776e2c4c60fa995580f84d8444bdc3397726eb263afaf9e9"' :
                                            'id="xs-components-links-module-ConditionInputPageModule-3e98b3c05d44fefe50aa01d8d948efdfb4169b9cee69c8d3c8d5978414b973768e467e5003db4d21776e2c4c60fa995580f84d8444bdc3397726eb263afaf9e9"' }>
                                            <li class="link">
                                                <a href="components/ConditionButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConditionButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConditionInputPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConditionInputPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConditionInputPageRoutingModule.html" data-type="entity-link" >ConditionInputPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HowInputPageModule.html" data-type="entity-link" >HowInputPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HowInputPageModule-736bfa08d98aec08f62c68623dc93697119ec44ef284b1f6459aebb51683efc558b8577456709a249e4a1849ef5acee05762bacbbc65f96c21e53b962d2286e6"' : 'data-target="#xs-components-links-module-HowInputPageModule-736bfa08d98aec08f62c68623dc93697119ec44ef284b1f6459aebb51683efc558b8577456709a249e4a1849ef5acee05762bacbbc65f96c21e53b962d2286e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HowInputPageModule-736bfa08d98aec08f62c68623dc93697119ec44ef284b1f6459aebb51683efc558b8577456709a249e4a1849ef5acee05762bacbbc65f96c21e53b962d2286e6"' :
                                            'id="xs-components-links-module-HowInputPageModule-736bfa08d98aec08f62c68623dc93697119ec44ef284b1f6459aebb51683efc558b8577456709a249e4a1849ef5acee05762bacbbc65f96c21e53b962d2286e6"' }>
                                            <li class="link">
                                                <a href="components/HowInputPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HowInputPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HowInputPageRoutingModule.html" data-type="entity-link" >HowInputPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputCreatePageModule.html" data-type="entity-link" >InputCreatePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputCreatePageModule-e86bdde240c540d7873da01f056a38f084c0ae08cc742ef261ff1239119efe4c7ca4fa1da6dd417da7ed396cc97ceee75c25b9022a638f2c2696d3e0ccf02892"' : 'data-target="#xs-components-links-module-InputCreatePageModule-e86bdde240c540d7873da01f056a38f084c0ae08cc742ef261ff1239119efe4c7ca4fa1da6dd417da7ed396cc97ceee75c25b9022a638f2c2696d3e0ccf02892"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputCreatePageModule-e86bdde240c540d7873da01f056a38f084c0ae08cc742ef261ff1239119efe4c7ca4fa1da6dd417da7ed396cc97ceee75c25b9022a638f2c2696d3e0ccf02892"' :
                                            'id="xs-components-links-module-InputCreatePageModule-e86bdde240c540d7873da01f056a38f084c0ae08cc742ef261ff1239119efe4c7ca4fa1da6dd417da7ed396cc97ceee75c25b9022a638f2c2696d3e0ccf02892"' }>
                                            <li class="link">
                                                <a href="components/InputCreatePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputCreatePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InputCreatePageRoutingModule.html" data-type="entity-link" >InputCreatePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputDetailPageModule.html" data-type="entity-link" >InputDetailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputDetailPageModule-e53d8b5c271cc5b4f0ca27e0dd2adfa47ef4ebfb2ceec1abcd431d46a2e28fc2512188e32b52ac5077d182e3d13186b6a2ac11584ed41f8cf43fd4af5f21fc33"' : 'data-target="#xs-components-links-module-InputDetailPageModule-e53d8b5c271cc5b4f0ca27e0dd2adfa47ef4ebfb2ceec1abcd431d46a2e28fc2512188e32b52ac5077d182e3d13186b6a2ac11584ed41f8cf43fd4af5f21fc33"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputDetailPageModule-e53d8b5c271cc5b4f0ca27e0dd2adfa47ef4ebfb2ceec1abcd431d46a2e28fc2512188e32b52ac5077d182e3d13186b6a2ac11584ed41f8cf43fd4af5f21fc33"' :
                                            'id="xs-components-links-module-InputDetailPageModule-e53d8b5c271cc5b4f0ca27e0dd2adfa47ef4ebfb2ceec1abcd431d46a2e28fc2512188e32b52ac5077d182e3d13186b6a2ac11584ed41f8cf43fd4af5f21fc33"' }>
                                            <li class="link">
                                                <a href="components/InputDetailPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputDetailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InputDetailPageRoutingModule.html" data-type="entity-link" >InputDetailPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputEditPageModule.html" data-type="entity-link" >InputEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputEditPageModule-f4b40955eff13a7acaf864a808466955063fade9472ed987206f97b9f60e5426f626cf983d509e146ad6919d2c58ff9cd069442ef9566a229195aea3d39bfc1b"' : 'data-target="#xs-components-links-module-InputEditPageModule-f4b40955eff13a7acaf864a808466955063fade9472ed987206f97b9f60e5426f626cf983d509e146ad6919d2c58ff9cd069442ef9566a229195aea3d39bfc1b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputEditPageModule-f4b40955eff13a7acaf864a808466955063fade9472ed987206f97b9f60e5426f626cf983d509e146ad6919d2c58ff9cd069442ef9566a229195aea3d39bfc1b"' :
                                            'id="xs-components-links-module-InputEditPageModule-f4b40955eff13a7acaf864a808466955063fade9472ed987206f97b9f60e5426f626cf983d509e146ad6919d2c58ff9cd069442ef9566a229195aea3d39bfc1b"' }>
                                            <li class="link">
                                                <a href="components/InputEditPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InputEditPageRoutingModule.html" data-type="entity-link" >InputEditPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InputListPageModule.html" data-type="entity-link" >InputListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InputListPageModule-4cc3dee3927c54b9843df6afe4c281040219dd8f11a1c0ebc0d6b18929cc80762280c2673357b458958fa201ea089593e9c545dbd572c373f14c007ee4ffa396"' : 'data-target="#xs-components-links-module-InputListPageModule-4cc3dee3927c54b9843df6afe4c281040219dd8f11a1c0ebc0d6b18929cc80762280c2673357b458958fa201ea089593e9c545dbd572c373f14c007ee4ffa396"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InputListPageModule-4cc3dee3927c54b9843df6afe4c281040219dd8f11a1c0ebc0d6b18929cc80762280c2673357b458958fa201ea089593e9c545dbd572c373f14c007ee4ffa396"' :
                                            'id="xs-components-links-module-InputListPageModule-4cc3dee3927c54b9843df6afe4c281040219dd8f11a1c0ebc0d6b18929cc80762280c2673357b458958fa201ea089593e9c545dbd572c373f14c007ee4ffa396"' }>
                                            <li class="link">
                                                <a href="components/InputListPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InputListPageRoutingModule.html" data-type="entity-link" >InputListPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OverviewPageModule.html" data-type="entity-link" >OverviewPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OverviewPageModule-38c30e1ad517155a5efe6c4781f1d43d1a8d49650c1b1cb0fbb85f37bb14c8cbdcee323f6f0f73a2e5bc2ac0d3f26a221075c1e3a800f2b1cd75b4e4cad391c7"' : 'data-target="#xs-components-links-module-OverviewPageModule-38c30e1ad517155a5efe6c4781f1d43d1a8d49650c1b1cb0fbb85f37bb14c8cbdcee323f6f0f73a2e5bc2ac0d3f26a221075c1e3a800f2b1cd75b4e4cad391c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OverviewPageModule-38c30e1ad517155a5efe6c4781f1d43d1a8d49650c1b1cb0fbb85f37bb14c8cbdcee323f6f0f73a2e5bc2ac0d3f26a221075c1e3a800f2b1cd75b4e4cad391c7"' :
                                            'id="xs-components-links-module-OverviewPageModule-38c30e1ad517155a5efe6c4781f1d43d1a8d49650c1b1cb0fbb85f37bb14c8cbdcee323f6f0f73a2e5bc2ac0d3f26a221075c1e3a800f2b1cd75b4e4cad391c7"' }>
                                            <li class="link">
                                                <a href="components/OverviewPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverviewPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OverviewPageRoutingModule.html" data-type="entity-link" >OverviewPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoomInputPageModule.html" data-type="entity-link" >RoomInputPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RoomInputPageModule-5b6c205788f7998647ec33bbe1f0b97e193db45f15731b0bba63b91bc33a9b8ca6572d5f799e38fd9faab97119169e97344d104622e3a437770bc0406782e4a4"' : 'data-target="#xs-components-links-module-RoomInputPageModule-5b6c205788f7998647ec33bbe1f0b97e193db45f15731b0bba63b91bc33a9b8ca6572d5f799e38fd9faab97119169e97344d104622e3a437770bc0406782e4a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RoomInputPageModule-5b6c205788f7998647ec33bbe1f0b97e193db45f15731b0bba63b91bc33a9b8ca6572d5f799e38fd9faab97119169e97344d104622e3a437770bc0406782e4a4"' :
                                            'id="xs-components-links-module-RoomInputPageModule-5b6c205788f7998647ec33bbe1f0b97e193db45f15731b0bba63b91bc33a9b8ca6572d5f799e38fd9faab97119169e97344d104622e3a437770bc0406782e4a4"' }>
                                            <li class="link">
                                                <a href="components/RoomInputPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomInputPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoomInputPageRoutingModule.html" data-type="entity-link" >RoomInputPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Inputs.html" data-type="entity-link" >Inputs</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});