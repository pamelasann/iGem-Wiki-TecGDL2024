export function Hardware() {
  return (
    <>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-lg-3 col-md-12 pt-5 ps-5" id="menu-container">
            <div id="titles-container">
              <ul className="list-unstyled">
                <li className="ps-4">
                  <a href="#part1">Introduction</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part1.1" className="subtitle">Bluetooth Integration</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.2" className="subtitle">Hardware Modifications</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.3" className="subtitle">Bluetooth Module Configuration</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.4" className="subtitle">Arduino Code: "codergb"</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.5" className="subtitle">Arduino Code: "lectura tcs"</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part1.6" className="subtitle">Mobile App and Software Development</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part2">Documentation of the hardware system to enable reproduction by other teams</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part2.1" className="subtitle">Material</a>
                    </li>
                    <li className="ps-4">
                      <a href="#part2.2" className="subtitle">3D Model Design</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part3">Aspects for future proposals</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                      <a href="#part3.1" className="subtitle">Proposals to be developed</a>
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part4">Conclusions</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
                <li className="ps-4">
                  <a href="#part5">References</a>
                  <ul className="list-unstyled">
                    <li className="ps-4">
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* Content */}
          <div className="col-lg-9 col-md-12" id="main-content-container">
            <div className="container-fluid" id="text-content">
              <div className="container-fluid p-3 mt-5" id="part1">
                <h1 className="mb-3">Introduction</h1>
                <p>This device has the objective of being an affordable process for the classification and monitoring of fluorescence emitted by the system, based on the principle of energy transfer of two fluorescent molecules.</p>
                <br></br>
                <p>Fluorescence emission was measured using an RGB sensor, with voltage variations, rather than resistance, being the primary variable of interest. These voltage readings were captured using an Arduino Nano microcontroller.</p>
                <br></br>
                <p>Last year,  four prototypes were made in total. For the last prototype the color sensor TCS34725 was used because it allows the white LED to be turned on and off, infrared light (IR) blocking, programming of analog gain and integration time, and setting manual interruption thresholds. This interruption feature allows for better efficiency for the system software.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure-1-1-color-sensor-tcs34725.png" id="content-image"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 1.1 Color sensor TCS34725.</p>
                </div>
                <br></br>
                <p>The device's design, as shown in Figure 1.1,  optimizes sample positioning. The Eppendorf tube containing the sample is placed in close proximity to the color sensor. To maximize protein fluorescence, eight LEDs were incorporated for UV light illumination. A slot for the tube shields the sensor from excessive UV exposure. </p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure-1-2-final-prototype-model-2023.jpg" id="content-image"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 1.2 Final Prototype Model 2023.</p>
                </div>
                <br></br>
                <p>A K-nearest Neighbor (machine learning algorithm that classifies data points based on the majority label of their k nearest neighbors) model was implemented, to include machine learning. With this model the dataset is divided into two; the training set and the test set, where 75% and 25% of the dataset is used respectively. It was found that the accuracy of the model is up to 90% regardless of the K selected.</p>
                <br></br>
                <p>By the end of the prototyping it was concluded that the model of K-nearest neighbor was adequate to predict data measured by the device, as long as the new information and sample proteins belong in the same color spectra as the ones the model was trained with. Also, the addition of the app was thought of to enhance the usability of the device, but ultimately was not added due to difficulties with the addition of the bluetooth connection. </p>
                <br></br>
                <p>Based on the final prototype developed in 2023, we implemented several enhancements to improve its functionality and user experience. One significant addition was a module that allows users to send information directly through an app, as illustrated in Figure 1.3.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure-1-3-diagram-with-the-integrated-module.jpg" id="content-image"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 1.3 Diagram with the integrated module.</p>
                </div>
              </div>
              <div className="container-fluid p-3" id="part1.1">
                <h2>Bluetooth Integration</h2>
                <p>Similar to the previous year's prototype, we incorporated a Bluetooth module to enhance portability. This feature enables users to connect a smartphone and conveniently access the collected data using a dedicated app. To integrate Bluetooth functionality, we utilized the HC-05 Bluetooth module and included resistors of 1K and 2K ohms.</p>
              </div>
              <div className="container-fluid p-3" id="part1.2">
                <h2>Hardware Modifications</h2>
                <p>The plastic enclosure underwent modifications to accommodate the Bluetooth module and ensure a secure fit for all components. We adjusted the dimensions of the box to guarantee optimal alignment between the plastic parts and the circuit.</p>
              </div>
              <div className="container-fluid p-3" id="part1.3">
                <h2>Bluetooth Module Configuration</h2>
                <ul>
                  <li><b>TX and RX pins: Facilitate serial communication between the Arduino and the wireless module.</b></li>
                  <li><b>GND pin:</b> Provides a ground connection.</li>
                  <li><b>3.3V pin:</b> Supplies power to the wireless module.</li>
                  <li><b>Resistors:</b> The 1K and 2K ohm resistors create a voltage divider, ensuring the HC-05 Bluetooth module receives a compatible voltage (3.3V) from the Arduino's 5V output.</li>
                  <li><b>EN pin:</b>Enables or disables the Bluetooth module.</li>
                  <li><b>RST pin:</b> Resets the Bluetooth module.</li>
                  <li><b>HC-05 Bluetooth module:</b> The wireless module.</li>
                </ul>
              </div>
              <div className="container-fluid p-3" id="part1.4">
                <h2>Arduino Code: "codergb"</h2>
                <p>This Arduino code is designed to read color sensor data from an Adafruit TCS34725 sensor and transmit it via Bluetooth. It performs the following tasks:</p>
                <ol>
                  <li><b>Includes necessary libraries:</b> Imports libraries for sensor, serial, and Bluetooth communication.</li>
                  <li><b>Initializes color sensor:</b> Configures the sensor with specific integration time and gain settings.</li>
                  <li><b>Establishes connections:</b> Initializes both serial and Bluetooth connections.</li>
                  <li><b>Reads and processes data:</b> Continuously reads raw color data, calculates color temperature and lux, formats the data into a string, and sends it to both the serial monitor and Bluetooth.</li>
                </ol>
              </div>
              <div className="container-fluid p-3" id="part1.5">
                <h2>Arduino Code: "lectura tcs"</h2>
                <p>This code focuses on reading data from the Adafruit TCS34725 color sensor and displaying it on the serial monitor. It includes the following steps:</p>
                <ol>
                  <li><b>Includes libraries:</b> Imports libraries for I2C communication (Wire.h) and TCS34725 sensor handling (Adafruit_TCS34725.h). Then, the sensor is initialized with a time integration of 50ms and a gain of 4x.</li>
                  <li><b>Initializes sensor:</b> The sensor is initialized with a time integration of 50ms and a gain of 4x.</li>
                  <li><b>Sets up serial communication:</b> Starts serial communication at 9600 baud and checks for sensor initialization errors.</li>
                  <li><b>Reads and displays data:</b>Reads red, green, blue, and clear values from the sensor and prints them on the serial monitor. Also calculates color temperature and lux (not displayed in this version).</li>
                </ol>
                <p>In the loop() function, the red, green, blue and clear values of the sensor are read. These values are printed on the serial monitor, separated by commas. The color temperature and lux are also calculated, but these values are not printed in this version of the code. The code provides the raw values of red, green and blue from the sensor in each loop cycle. These values can be used to perform additional calculations or make decisions based on the detected color. The code includes comments that may be useful for displaying additional information such as color temperature, lux and individual red, green, blue and light values. You can uncomment them if you wish to display this data.</p>
              </div>
              <div className="container-fluid p-3" id="part1.6">
                <h2>Mobile App and Software Development</h2>
                <p>For the display of the information recorded, an app was created to make it possible for the results to be observed from a smartphone allowing it to be more user friendly. The program of MIT App Inventor was used to create the code and the user interface  (Figure 2). First, the Bluetooth needs to be connected and for the app to know where to send the data it receives. Then, two variables are created, in this case they are created as a list. After that, a clock is initiated. It starts by checking if the Bluetooth is connected, if it is, then a label on the interface that says “Disconnected” changes to “Connected” and color to indicate a successful connection. Then, it indicates that “global Bt_Data” are the values that the app receives through the Bluetooth, but “global Lista” ensures that the data read is divided into the different values. Since three colors are received, then the already divided values are shown on the interface in their respective place, next to the label that indicates the color the data represents.</p>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure-2-preview-of-the-app.jpg" id="content-image"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 2. Preview of the app.</p>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure-3-first-part-of-programming-by-blocks-of-the-app.png" id="content-image"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 3. First part of the programming by blocks of the app.</p>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                  <img src="https://static.igem.wiki/teams/5439/images/figure-4-block-programming-of-the-app.jpg" id="content-image"></img>
                </div>
                <br></br>
                <div className="d-flex justify-content-center align-items-center" id="foot-note">
                  <p>Figure 4. Block programming of the app.</p>
                </div>
              </div>
              <div className="container-fluid p-3 mt-5" id="part2">
                <h1 className="mb-3">Documentation of the hardware system to enable reproduction by other teams</h1>
                <p>To enable replication by other teams, we provide detailed documentation of the hardware system. The materials required include:</p>
                <h3 id="part2.1">Material</h3>
                <ol>
                  <li>PLA filament</li>
                  <li>3D printer</li>
                  <li>Bakelite board (5x5 cm)</li>
                  <li>8 UV-light LEDs (390-400 nm)</li>
                  <li>Arduino Nano board</li>
                  <li>2 S-116 switches</li>
                  <li>HC-05 Bluetooth module</li>
                  <li>1 1 K resistors</li>
                  <li>1 2 k resistors</li>
                  <li>8 220 Ω resistors</li>
                  <li>Breadboard cable</li>
                  <li>Soldering iron</li>
                  <li>Solder paste</li>
                  <li>Lead and tin solder</li>
                  <li>TCS34725 Color Light-to-Digital Converter with IR Filter</li>
                </ol>
                <h3 id="part2.2">3D Model Design</h3>
                <p>In order to develop a physical model, SolidWorks 2024, a 3D computer-aided design (CAD) software, was used. The model consists of nine pieces, individually designed. In order to identify them, they were labeled as follows:</p>
                <ul>
                  <li>Circuit Box: implemented to hold the integrated circuits needed for instrumentation devices.</li>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-5-circuit-box.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 5. Circuit Box.</p>
                  </div>
                  <li>C-cover: This component can be integrated with the TCS34725, allowing individual assembly.</li>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-6-c-cover.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 6. C-Cover.</p>
                  </div>
                  <li>Main Box: This part has two primary functions: it assembles the eight UV LEDs (the gaps were positioned sideways) and it features a window that allows the user to see a sample that has been added to the device.</li>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-7-main-box.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 7. Main box.</p>
                  </div>
                  <li>Top Cover:  An upper cover made to keep out light sources other than the ones inside the device.</li>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-8-top-cover.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 8. Top cover.</p>
                  </div>
                  <li>Back cover: This piece entirely covers the back side of the TCS34725, shielding the external portion of the module and isolating it from outside light. Furthermore, two slots were incorporated to house a switch button for operating the UV LEDs.</li>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-9-back-cover.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 9. Back cover.</p>
                  </div>
                  <li>Eppendorf tube holder: designed for holding a 1.5-2 mL Eppendorf tube within the device.</li>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-10-eppendorf-tube-holder.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 10. Eppendorf tube holder.</p>
                  </div>
                  <li>Window lid: covers the window in order to achieve total system isolation.</li>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-11-window-lid.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 11. Window lid.</p>
                  </div>
                  <li>Shield: This addition is intended to improve the model's appearance while also providing a protected cover for the integrated Bluetooth module.</li>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-12-shield.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 12. Shield.</p>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-12-1-switch-cover.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 12.1 Switch cover.</p>
                  </div>
                  <li>Shield cover:  This is the cover for the previously mentioned shield, intended to protect the entire model design.</li>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-13-shield-cover.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 13. Shield cover.</p>
                  </div>
                </ul>
              </div>
              <div className="container-fluid p-3 mt-5" id="part3">
                <h1 className="mb-3">Aspects for future proposals</h1>
                <p>The proposal intends for the device to evaluate the quality of water samples in an accessible and portable way. Some of the considerations that can be taken into account for its improvement are the detection accuracy and limitations in the types of detectable contaminants. That is why for future proposals the improvement of the sensor will be sought because the TCS34725 that was used is limited in several aspects; in addition, with the current model only one sample is analyzed at a time, which could be improved with automation and the implementation of a mechanical movement that allows moving and analyzing at least 4 samples at the same time.</p>
                <br></br>
                <p>For all the above mentioned, instead of using the TCS34725 sensor, the AS7341 sensor will be used because of the following characteristics:</p>
                <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/table-comparison.jpg" id="simple-image"></img>
                </div>
                <br></br>
                <p>Due to the 11 channels, it captures more information about the light spectrum, which makes it more accurate for precise color analysis, light quality monitoring, and spectral studies in scientific research. It performs more versatile measurements such as material identification, in industry it has applications in precision agriculture, environmental monitoring, scientific, health and welfare  (Ams-OSRAM, 2022).</p>
              </div>
              <div className="container-fluid p-3" id="part2.1">
                <h2 id="part3.1">Proposals to be developed</h2>
                <ul>
                  <li><h3>First prototype model</h3></li>
                  <p>To attack the problem of analyzing several samples at the same time in an optimized way, it was decided to design a carousel-type mechanism so that 4 samples can be placed in the device. As shown in Figure 14, the Eppendorf tubes will be placed in each of the supports on each arm connected to a common tube that ends in a 16-tooth gear which is geared to a 6-tooth gear. It is controlled by means of a handle, when giving a turn it changes samples for the sensor to analyze it, this mechanism would allow speeding up the process. The sensor will be inserted into the slot so that it can analyze the components and be easily accessible in case you want to make improvements just slide it up.</p>
                  <br></br>
                  <p>It is contemplated that in this model the four samples will be fluoresce for an indefinite time to be moved with a manual handle. This movement can result in a complication due to the need of an individual which may be a possible complication as it does not move uniformly but it is thought to prevent it by implementing a motor for constant movement.</p>
                  <br></br>
                  <p>A 3D model was made to visualize the function of the model that is represented in Figures 14 to 18. It can be seen that it's a box with a removable lid in which are the arms where samples go in the Eppendorf tubes with a lateral slot to place the AS7341 sensor.</p>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-14-3d-model-of-the-first-model-made-in-fusion-showing-the-front-with-the-box-open-the-carousel-mechanism-on-the-lid-and-the-slot-for-the-as7341-sensor-on-the-side.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 14.  3D model of the first model made in Fusion showing the front with the box open, the carousel mechanism on the lid and the slot for the AS7341 sensor on the side.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-15-3d-model-of-the-first-model-made-in-fusion-showing-the-front-with-the-box-closing-the-lid-shows-the-handle-by-which-the-movement-of-the-samples-will-be-controlled-and-more-clearly-the-slot-for-the-as7341-sensor-on-the-side-face.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 15. 3D model of the first model made in Fusion showing the front with the box closing, the lid shows the handle by which the movement of the samples will be controlled and more clearly the slot for the AS7341 sensor on the side face.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-16-3d-model-of-the-first-model-made-in-fusion-showing-rear-view-of-the-gear-mechanism-together-with-the-support-for-the-eppendorf-tubes.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 16. 3D model of the first model made in Fusion showing rear view of the gear mechanism together with the support for the Eppendorf tubes.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-17-3d-model-of-the-first-model-made-in-fusion-showing-side-view-of-the-device-cover-where-the-gears-are-located-together-with-the-support-for-the-eppendorf-tubes.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 17. 3D model of the first model made in Fusion showing side view of the device cover where the gears are located together with the support for the Eppendorf tubes.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-18-drawing-diagram-of-model-one-made-in-fusion.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 18. Drawing diagram of model one made in Fusion.</p>
                  </div>
                  <li><h3>Second prototype model</h3></li>
                  <p>Contrary to the previous model, fluorescence can be instantaneous because with the use of the new sensor it can be captured by intermittence. The model consists of a support for the Eppendorf tube to which the sample will be taken horizontally as shown in Figure 22, as it can be seen in Figures 19, 20 and 21 the sensor is place in a slot which means is removable to facilitate its change in case of malfunction since it is connected to its arduino in an isolated way. The limitations of this model is that being able to capture the fluorescence instantly can be done from only one Eppendorf tube thus limiting the amount of tests at the time, but in turn being able to capture instantly you can take tests of new components that in previous models were impossible to perform.</p>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-19-3d-model-of-the-second-model-made-in-fusion-showing-the-front-with-the-box-closing-and-the-slot-for-the-as7341-sensor-on-the-side-face.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 19. 3D model of the second model made in Fusion showing the front with the box closing and the slot for the AS7341 sensor on the side face.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-20-3d-model-of-the-second-model-made-in-fusion-with-the-open-box-showing-clearly-the-slot-for-the-as7341-sensor-on-the-side-face.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 20. 3D model of the second model made in Fusion with the open box showing clearly the slot for the AS7341 sensor on the side face.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-21-3d-model-of-the-second-model-made-in-fusion-opening-the-box-showing-the-slot-for-the-sensor-on-the-side-face.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 21. 3D model of the second model made in Fusion opening the box showing the slot for the sensor on the side face.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-22-3d-model-of-the-second-model-made-in-fusion-from-a-top-view-showing-the-support-for-the-eppendorf-tube.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex justify-content-center align-items-center" id="foot-note">
                        <p>Figure 21. 3D model of the second model made in Fusion from a top view showing the support for the Eppendorf tube.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-23-drawing-diagram-of-model-two-made-in-fusion.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 23. Drawing diagram of model two made in Fusion.</p>
                  </div>
                  <br></br>
                  <p>For the two models, the sensor will be connected to a box where the “Arduino UNO” microcontroller will be placed, as shown in Figure 24, in order to make it easier to transport and at the same time provide protection to the microcontroller. This box is perfectly assembled to support “Arduino UNO” and at the same time have the necessary holes for its connection to the power supply and the sensor used, as shown in Figures 25 and 26. As the AS7341 sensor will be connected directly to the Arduino, the connections are shown in Figure 28 and if it is wanted to be easier to transport, a schematic model for the PCB creation is given (Figure 27) which shows how easy it is to make such a board.</p>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-24-3d-model-of-the-case-for-arduino-uno.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 24. 3D model of the case for arduino UNO.</p>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-25-3d-model-of-top-view-showing-perfect-assembles-of-the-driver.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 25. 3D model of top view showing perfect assembles of the driver.</p>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-26-3d-model-of-the-arduino-sideways.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 26. 3D model of the arduino sideways.</p>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-27-design-of-the-pcb-in-eagle.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 27. Design of the PCB in Eagle.</p>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="https://static.igem.wiki/teams/5439/images/figure-28-schematic-eagle-pcb-design.jpg" id="content-image"></img>
                  </div>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center" id="foot-note">
                    <p>Figure 28. Schematic eagle PCB design.</p>
                  </div>
                </ul>
              </div>
              <div className="container-fluid p-3 mt-5" id="part4">
                <h1 className="mb-3">Conclusions</h1>
                <p>The enhanced prototype presented in this page represents a significant advancement in water quality analysis. By incorporating a user-friendly app and Bluetooth integration, we have improved accessibility and portability. The detailed documentation and 3D models provide a solid foundation for future development and replication.</p>
                <br></br>
                <p>While the current prototype demonstrates promising capabilities, there is still room for improvement. Future proposals should focus on enhancing sensor accuracy, expanding the range of detectable contaminants, and exploring automation techniques to increase efficiency. The proposed changes, such as utilizing the AS7341 sensor, offer potential solutions for addressing these limitations.</p>
              </div>
              
              <div className="container-fluid p-3 mt-5" id="part5">
                <h1 className="mb-3">References</h1>
                <div className="row">
                  <div className="col-12 col-md-1"></div>
                  <div className="col-12 col-md-11">
                    <div className="references-container">
                      <p>Ams-OSRAM. (2022). <i>AS7341 11-channel spectral sensor.</i> Digi-Key Electronics. https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/322/AS7341_EVAL_KIT.pdf</p>
                      <p>Ams-TAOS USA Inc. (2013). <i>TCS34725 color sensor </i>[PDF]. https://cdn-shop.adafruit.com/datasheets/TCS34725.pdf</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
