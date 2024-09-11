const TemplatesForImage = (theme, resumeData) => {
  return `
    <div class="bg-white shadow-lg max-w-2xl mx-auto p-6">
      <section class="flex items-center justify-between mb-3">
        <div class="flex flex-col">
          <p class="text-4xl font-bold text-gray-800">${resumeData.name}</p>
          <p class="text-xl text-gray-600">${resumeData.title}</p>
        </div>
        <div class="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
          <img src="${resumeData.imageURL}" alt="${resumeData.name}" class="rounded-full object-cover w-full h-full">
        </div>
      </section>

      <section class="grid grid-cols-2 gap-6">
        <div>
          <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">About Me</h2>
          <p class="text-gray-700">${resumeData.summary}</p>

          <h2 class="text-2xl font-semibold text-${theme}-500 mt-6 mb-2">Education</h2>
          <ul class="list-none">
            ${resumeData.education
              .map(
                (edu) => `
                  <li class="mb-3">
                    <p class="text-gray-700 font-semibold">${edu.Year}</p>
                    <p class="text-gray-600">${edu.Degree} at ${edu.Institute}</p>
                  </li>`
              )
              .join("")}
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Contact</h2>
          <p class="text-gray-700"><strong>Address:</strong> ${resumeData.address}</p>
          <p class="text-gray-700"><strong>Phone:</strong> ${resumeData.phone}</p>
          <p class="text-gray-700"><strong>Email:</strong> <a href="mailto:${resumeData.email}" class="text-blue-600">${resumeData.email}</a></p>
          <p class="text-gray-700"><strong>Website:</strong> <a href="${resumeData.portfolio}" class="text-blue-600" target="_blank" rel="noopener noreferrer">${resumeData.portfolio}</a></p>

          <h2 class="text-2xl font-semibold text-${theme}-500 mt-6 mb-2">Skills</h2>
          <ul class="list-none flex flex-wrap">
            ${resumeData.skills
              .map(
                (skill) => `
                  <li class="mb-2">
                    <span class="text-gray-700 mr-4 font-semibold">${skill}</span>
                  </li>`
              )
              .join("")}
          </ul>
           <h2 class="text-2xl font-semibold text-${theme}-500 mt-6 mb-2">Work Experience</h2>
          <ul class="list-none">
            ${resumeData.workExperience
              .map(
                (exp) => `
                  <li class="mb-3">
                    <p class="text-gray-700 font-semibold">${exp.Year}</p>
                    <p class="text-gray-600">${exp.Title} at ${exp.Company}</p>
                  </li>`
              )
              .join("")}
          </ul>
        </div>
      </section>
    </div>
  `;
};

export default TemplatesForImage;
