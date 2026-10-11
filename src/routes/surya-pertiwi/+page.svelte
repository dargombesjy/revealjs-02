<script>
    import Grid12 from "$lib/components/Grid-12.svelte";
    import Title from "./Title.svelte";
    import Diagram from "$lib/assets/svg/surya-pertiwi/surya_pertiwi.svg?raw";
    // import Diagram1 from "$lib/assets/svg/surya-pertiwi/surya_pertiwi_1.svg?raw";
    import Diagram1 from "$lib/assets/svg/surya-pertiwi/surya_pertiwi_2.svg?raw";
    import DigitalAccess from "$lib/assets/images/surya-pertiwi/digital_access.png";
</script>

<div class="slides">
    <section class="w-screen h-screen">
        <Grid12 class="grid-rows-[4rem_auto_auto_2rem]">
            <Title text="Objective: Reduce Digital Access consumption" />
            <div class="col-span-8 row-start-2 mt-8 text-4xl">
                <ol>
                    <li>
                        Use of <span class="font-bold italic"
                            >SAP iRPA (intelligent Robotic Process Automation)
                            bots without additional licensing</span
                        > for both API and UI based access to Digital Core​
                    </li>
                    <li>
                        Access to Digital Core with <span
                            class="font-bold italic"
                        >
                            attended third-party RPA bots</span
                        > is considered as human access for scenarios where the bot
                        is acting on behalf of this human​
                    </li>
                    <li>
                        Access to Digital Core with <span
                            class="font-bold italic"
                        >
                            unattended third-party RPA bots
                        </span>
                        requires additional licensing (Digital Access)​
                    </li>
                </ol>
            </div>
            <div class="col-start-9 col-span-3 row-start-2 mt-8">
                <img src={DigitalAccess} alt="" />
            </div>
            <div class="col-span-12 row-start-3 text-3xl">
                <table>
                    <thead>
                        <tr>
                            <th>Access Type to Digital Core</th>
                            <th>SAP Intelligent RPA</th>
                            <th>Third-Party RPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Unattended Bot</td>
                            <td>
                                SAP Application Access via passport No
                                additional licensing
                            </td>
                            <td>
                                Digital Access either due to API call without
                                passport or registered BOT user Additional
                                licensing
                            </td>
                        </tr>
                        <tr>
                            <td>Attended Bot</td>
                            <td>
                                Digital Access either due to API call without
                                passport or registered BOT user Additional
                                licensing
                            </td>
                            <td>
                                Direct Human Access with link to a user license
                                No additional licensing
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Grid12>
    </section>
    <section class="w-screen h-screen">
        <Grid12>
            <Title text="Process Overview" />
            <div class="row-start-2">
                {@html Diagram}
            </div>
        </Grid12>
    </section>

    <section class="w-screen h-screen">
        <Grid12>
            <Title text="Topology & Flow" />
            <div class="col-start-1 col-span-12 row-start-2">
                {@html Diagram1}
            </div>
        </Grid12>
    </section>

    <section class="w-screen h-screen">
        <Grid12 class="grid-rows-[4rem_auto_auto_2rem]">
            <Title text="Hardware & Desktop Agent" />
            <div class="col-start-1 col-span-11 row-start-2 mt-6">
                <div class="text-3xl text-left">Hardware</div>
                <table class="text-3xl d-left">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Minimum</th>
                            <th>Recommended</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CPU</td>
                            <td
                                >Dual Core 2 GHz, x86-64, aarch64, or ppc64le
                                architecture-compatible</td
                            >
                            <td
                                >Multi Core 3 GHz, x86-64, aarch64, or ppc64le
                                architecture-compatible</td
                            >
                        </tr>
                        <tr>
                            <td>Memory (RAM)</td>
                            <td>4 GB</td>
                            <td>16 GB</td>
                        </tr>
                        <tr>
                            <td>Free disk space (after OS)</td>
                            <td>2 GB</td>
                            <td>20 GB</td>
                        </tr>
                        <tr></tr>
                    </tbody>
                </table>
            </div>

            <div class="col-start-1 col-span-11 row-start-3 mt-8">
                <div class="text-3xl text-left">Desktop Agent</div>
                <table class="text-3xl d-left">
                    <thead>
                        <tr>
                            <th>Req. Category</th>
                            <th>Minimum Requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="2">Hardware</td>
                            <td>Screen resolution: 1366 x 768</td>
                        </tr>
                        <tr>
                            <td>Disk space: 1 GB of free space</td>
                        </tr>
                        <tr>
                            <td rowspan="5">Software components</td>
                            <td>Microsoft .NET Framework 4.7</td>
                        </tr>
                        <tr>
                            <td>Internet connection (to connect to SAP BTP)</td>
                        </tr>
                        <tr>
                            <td>SAP GUI</td>
                        </tr>
                        <tr>
                            <td>
                                For Desktop Agent version 2: Microsoft Internet
                                Explorer 11
                            </td>
                        </tr>
                        <tr>
                            <td>
                                For Desktop Agent version 3: Microsoft Edge 94
                            </td>
                        </tr>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </Grid12>
    </section>

    <section class="w-screen h-screen">
        <Grid12>
            <Title text="Tasks & Resources" />
            <div class="col-start-1 col-span-12 row-start-2 mt-8">
                <table class="text-3xl d-left">
                    <thead>
                        <tr>
                            <th>Resource</th>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cloud Administrator</td>
                            <td>
                                <ul>
                                    <li>SAP BTP Provisioning</li>
                                    <li>
                                        Cloud Connector installation & setup
                                    </li>
                                    <li>Desktop Agent installation & setup</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Functional Consultant</td>
                            <td>
                                <ul>
                                    <li>Define process details</li>
                                    <li>Perform end-to-end testing</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>ABAP Developer</td>
                            <td>Develop ABAP programs</td>
                        </tr>
                        <tr>
                            <td>BTP Developer</td>
                            <td>
                                <ul>
                                    <li>Automation development</li>
                                    <li>Automation deployment & scheduling</li>
                                    <li>Automation testing & adjustment</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Grid12>
    </section>

    <section>
        <h3>Discovery</h3>
        <div>
            <a
                href="https://discovery-center.cloud.sap/serviceCatalog/sap-build-process-automation"
                target="_blank"
                aria-label="Licensing"
            >
                Discovery Center
            </a>
        </div>
    </section>
</div>

<style>
    .d-left {
        margin-left: 2rem;
    }
</style>
