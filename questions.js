const questions = [
  {
      q: "What defines an orthogonal curvilinear coordinate system?",
      options: ["Axes intersect at 90° and curves are concentric", "Curves form grid lines", "All coordinate surfaces are planar", "All vectors are constant"],
      answer: 0,
    },
    {
      q: "Which of the following is an example of an orthogonal curvilinear system?",
      options: ["Rectangular", "Polar", "Elliptic cylindrical", "All of the above"],
      answer: 3,
    },
    {
      q: "In orthogonal curvilinear systems, the scale factors are used to:",
      options: ["Normalize axes", "Convert between coordinate systems", "Compute vector operations", "Define surface area"],
      answer: 2
    },
    {
      q: "Which coordinate system is ideal for spherical symmetry problems?",
      options: ["Cartesian", "Cylindrical", "Polar", "Spherical"],
      answer: 3,
    },
    {
      q: "Why is the concept of orthogonality useful in vector calculus?",
      options: ["Simplifies dot and cross products", "Removes need for gradients", "Eliminates need for metrics", "Avoids surface integrals"],
      answer: 0,
    },
    {
      q: "Which of the following coordinates are not part of the cylindrical system?",
      options: ["r", "θ", "z", "x"],
      answer: 3,
    },
    {
      q: "Curvilinear coordinates are particularly useful when:",
      options: ["Working with rectangular boundaries", "Analyzing variable fields in straight lines", "Analyzing fields with symmetry", "Only constant fields exist"],
      answer: 2,
    },
    {
      q: "What do the scale factors represent in curvilinear coordinates?",
      options: ["Axes labels", "Vector magnitude", "Ratio of differential arc lengths", "Time dilation factor"],
      answer: 2,
    },
    {
      q: "In an orthogonal system, differential lengths are expressed using:",
      options: ["Metric tensors", "Scale factors and coordinate increments", "Cartesian components only", "Surface equations"],
      answer: 1,
    },
    {
      q: "The Laplacian operator in curvilinear coordinates involves:",
      options: ["Only second derivatives", "No metric terms", "Scale factors", "Time derivatives"],
      answer: 2,
    },

     {
      q: "Vector transformation refers to:",
      options: ["Changing vector shape", "Changing vector units", "Changing basis of vector representation", "Changing electric field strength"],
      answer: 2,
    },
    {
      q: "Which of the following changes during a coordinate transformation?",
      options: ["Vector magnitude", "Vector direction", "Component values", "Total scalar field"],
      answer: 2,
    },
    {
      q: "When transforming vectors between coordinate systems, what remains invariant?",
      options: ["Vector components", "Vector field", "Vector direction", "Vector itself"],
      answer: 3,
    },
    {
      q: "Transformation from Cartesian to cylindrical involves replacing which coordinates?",
      options: ["(x, y, z) to (r, θ, z)", "(r, θ, z) to (x, y, z)", "(x, y) to (ρ, z)", "None"],
      answer: 0,
    },
    {
      q: "Which mathematical tool is essential for vector transformation?",
      options: ["Tensor calculus", "Matrix algebra", "Dot product", "Scalar projection"],
      answer: 1,
    },
    {
      q: "Vector transformation allows us to solve:",
      options: ["Only algebraic equations", "Only linear fields", "Problems in the most symmetric coordinate system", "Purely theoretical models"],
      answer: 2,
    },
    {
      q: "In which transformation are Jacobian matrices often used?",
      options: ["Scalar operations", "Vector field conversion", "Electrostatics only", "Charge density"],
      answer: 1,
    },
    {
      q: "What does a coordinate transformation preserve?",
      options: ["Magnitude only", "Direction only", "Physical meaning of vector", "Electric field strength"],
      answer: 2,
    },
    {
      q: "Which system is best for modeling circular motion?",
      options: ["Rectangular", "Spherical", "Cylindrical", "Curvilinear"],
      answer: 2,
    },
    {
      q: "What happens to the dot product after coordinate transformation?",
      options: ["Changes", "Remains invariant", "Becomes zero", "Depends on magnitude only"],
      answer: 1,
    },
    {
      q: "Unit vectors in Cartesian coordinates are:",
      options: ["Variable", "Dependent on position", "Constant", "Complex valued"],
      answer: 2,
    },
    {
      q: "Differential length is:",
      options: ["A vector", "A scalar", "A function of charge", "Independent of coordinate system"],
      answer: 0,
    },
    {
      q: "Which is a unit vector in cylindrical coordinates?",
      options: ["aₓ", "a_y", "a_r", "a_w"],
      answer: 2,
    },
    {
      q: "What is the magnitude of any unit vector?",
      options: ["0", "Depends on direction", "1", "Varies with axis"],
      answer: 2,
    },
    {
      q: "Differential length in spherical coordinates involves:",
      options: ["dx, dy, dz", "dr, dθ, dφ", "Only dr", "No angular components"],
      answer: 1,
    },
    {
      q: "Unit vectors in curvilinear systems:",
      options: ["Change with position", "Are always constant", "Are imaginary", "Represent magnitude only"],
      answer: 0,
    },
    {
      q: "The product of a unit vector and differential element gives:",
      options: ["A point", "A matrix", "A differential vector", "A force"],
      answer: 2,
    },
    {
      q: "Unit vectors are essential for:",
      options: ["Scalar multiplication", "Component-wise vector representation", "Charge flow", "Field symmetry"],
      answer: 1,
    },
    {
      q: "The direction of unit vectors defines:",
      options: ["Field strength", "Coordinate orientation", "Voltage gain", "Wave phase"],
      answer: 1,
    },
    {
      q: "Differential length is used to compute:",
      options: ["Scalar fields", "Vector transformations", "Line integrals", "Permittivity"],
      answer: 2,
    },
    {
      q: "Phasors represent:",
      options: ["DC signals", "Electrostatic fields", "Sinusoidal signals as complex numbers", "Surface currents"],
      answer: 2,
    },
    {
      q: "Addition of phasors corresponds to:",
      options: ["Phase multiplication", "Vector addition of amplitudes", "Wave cancellation", "Voltage drop"],
      answer: 1,
    },
    {
      q: "Which form is used for phasor multiplication?",
      options: ["Rectangular", "Polar", "Scalar", "Matrix"],
      answer: 1,
    },
    {
      q: "Phasor subtraction is performed using:",
      options: ["Complex conjugates", "Polar coordinates", "Rectangular form", "Sine rules"],
      answer: 2,
    },
    {
      q: "Division of two phasors in polar form gives:",
      options: ["Addition of angles", "Subtraction of angles", "Square of amplitudes", "Zero result"],
      answer: 1,
    },
    {
      q: "A phasor simplifies analysis by converting:",
      options: ["Time domain to frequency domain", "Scalar to vector", "DC to AC", "Magnitude to frequency"],
      answer: 0,
    },
    {
      q: "Which of the following is true for phasor addition?",
      options: ["Always zero", "Depends on phase difference", "Independent of angle", "Only valid for currents"],
      answer: 1,
    },
    {
      q: "Phasors are commonly used in:",
      options: ["Static charge systems", "Dynamic current analysis", "Time-independent magnetic fields", "Charge displacement systems"],
      answer: 1,
    },
    {
      q: "The result of phasor multiplication is:",
      options: ["Another phasor with same magnitude", "A phasor with new magnitude and angle", "Always a real number", "A dot product"],
      answer: 1,
    },
    {
      q: "The phase angle in a phasor corresponds to:",
      options: ["Time delay", "Amplitude", "Charge", "Frequency"],
      answer: 0,
    },
    {
      q: "Rotating vectors represent:",
      options: ["Static charge field", "Time-varying sinusoidal fields", "Resistive loss", "Constant voltage"],
      answer: 1,
    },
    {
      q: "Rotating vectors are useful in:",
      options: ["DC circuits", "Electrolysis", "AC machine modeling", "Battery storage"],
      answer: 2,
    },
    {
      q: "In electromagnetic fields, rotating vectors visualize:",
      options: ["Power loss", "Field interference", "Field phase and rotation", "Field energy only"],
      answer: 2,
    },
    {
      q: "What is the speed of a rotating vector in AC analysis?",
      options: ["Zero", "ω radians/sec", "π/2 radians", "Constant scalar"],
      answer: 1,
    },
    {
      q: "Rotating vectors are visualized in:",
      options: ["Cartesian plots", "Polar plots", "Frequency graphs", "Histograms"],
      answer: 1,
    },
    {
      q: "Which device relies heavily on rotating vector modeling?",
      options: ["Electric motor", "Solar panel", "Capacitor", "Rectifier"],
      answer: 0,
    },
    {
      q: "In 3-phase systems, rotating vectors help model:",
      options: ["Voltage drops", "Magnetic field rotation", "Resistance balance", "Thermal losses"],
      answer: 1,
    },
    {
      q: "The real part of a rotating vector represents:",
      options: ["Phase shift", "Instantaneous value", "Impedance", "Electric flux"],
      answer: 1,
    },
    {
      q: "A rotating vector's projection gives:",
      options: ["Field intensity", "Instantaneous waveform", "Capacitance", "Heat flow"],
      answer: 1,
    },
    {
      q: "Rotating vectors simplify the analysis of:",
      options: ["Magnetostatics", "AC steady-state fields", "Constant voltage circuits", "Thermal gradients"],
      answer: 1,
    }, 
]
