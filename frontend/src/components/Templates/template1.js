const Templates1 = (theme, resumeData) => {
    return `
      <div>
        <div class="bg-${theme}-500 h-3 max-w-3xl"></div>
        <div class="flex flex-col bg-gray-100 shadow-lg max-w-2xl mx-auto p-4">
          <section class="text-center mb-3">
            <p class="text-4xl font-bold text-gray-800 mb-2">${resumeData.name}</p>
            <p class="text-xl text-gray-600">${resumeData.title}</p>
            <div class="flex justify-center space-x-4">
              <p class="text-gray-700">Email: <a href="mailto:${resumeData.email}" class="text-blue-600">${resumeData.email}</a></p>
              <p class="text-gray-700">Phone: ${resumeData.phone}</p>
            </div>
            <p class="text-gray-700">Address: ${resumeData.address}</p>
            <p class="text-lg text-gray-600">
              <a href="${resumeData.linkedlnURL}" class="text-blue-600" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
              <a href="${resumeData.giturl}" class="text-blue-600" target="_blank" rel="noopener noreferrer">GitHub</a> |
              <a href="${resumeData.portfolio}" class="text-blue-600" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </p>
          </section>
  
          <section class="mb-4">
            <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Summary</h2>
            <p class="text-gray-700 overflow-x break-all">${resumeData.summary}</p>
          </section>
  
          <section class="mb-4">
            <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Education</h2>
            <table class="min-w-full bg-white">
              <thead>
                <tr class="w-full bg-gray-200">
                  <th class="py-2 text-center">Year</th>
                  <th class="py-2 text-center">Degree/Certificate</th>
                  <th class="py-2 text-center">Institute</th>
                  <th class="py-2 text-center">CGPA/%</th>
                </tr>
              </thead>
              <tbody>
                ${resumeData.education
                  .map(
                    (edu) => `
                      <tr>
                        <td class="py-2 text-center">${edu.Year}</td>
                        <td class="py-2 text-center">${edu.Degree}</td>
                        <td class="py-2 text-center">${edu.Institute}</td>
                        <td class="py-2 text-center">${edu.CGPA}</td>
                      </tr>`
                  )
                  .join("")}
              </tbody>
            </table>
          </section>
  
          <section class="mb-4">
            <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Work Experience</h2>
            <ul class="list-disc pl-5 text-gray-700">
              ${resumeData.workExperience
                .map((exp) => `<li>${exp}</li>`)
                .join("")}
            </ul>
          </section>
  
          <section class="mb-4">
            <h2 class="text-2xl font-semibold text-${theme}-500 mb-2">Skills</h2>
            <div class="grid grid-cols-3 gap-3">
              ${resumeData.skills
                .map((skill) => {
                  const skillParts = skill.split(":");
                  const skillName = skillParts[0];
                  const skillLevel = parseInt(skillParts[1], 10) || 55; // Fallback to 55 if parsing fails
                  return `
                    <div class="mb-2">
                      <div class="flex items-center justify-between">
                        <span class="w-32 font-semibold">${skillName}</span>
                        <span class="text-sm text-gray-600">${skillLevel}%</span>
                      </div>
                      <div class="w-full h-2 bg-gray-300 rounded">
                        <div class="bg-${theme}-400 h-2 rounded" style="width: ${skillLevel}%"></div>
                      </div>
                    </div>`;
                })
                .join("")}
            </div>
          </section>
        </div>
      </div>
    `;
  };
  
  export default Templates1;
  