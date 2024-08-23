import { http, HttpResponse } from "msw";

const handlers = [
  http.get("http://universities.hipolabs.com/search?namme=mod", () => {
    return HttpResponse.json({
      name: "University of Modena and Reggio Emilia",
    });
  }),
];

export default handlers;
