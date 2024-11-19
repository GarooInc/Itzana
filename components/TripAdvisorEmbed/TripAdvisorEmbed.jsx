"use client";
import React, { useEffect } from 'react';

const TripAdvisorEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.jscache.com/wejs?wtype=rated&uniq=898&locationId=12844316&lang=en_US&display_version=2";
    script.async = true;
    script.setAttribute('data-loadtrk', '');
    script.onload = () => {
      console.log("TripAdvisor widget loaded.");
    };
    document.getElementById('tripadvisor-widget').appendChild(script);
  }, []);

  return (
    <div id="tripadvisor-widget">
      <div id="TA_rated898" className="TA_rated">
        <ul id="AUC4BA2vX" className="TA_links 1d4eHAXJygW6">
          <li id="u0hJ4K" className="ekmjkEMK8Xw">
            <a
              target="_blank"
              href="https://www.tripadvisor.com/Hotel_Review-g291977-d12844316-Reviews-Itz_ana_Belize_Resort_Residences-Placencia_Stann_Creek.html"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.tripadvisor.com/img/cdsi/img2/badges/ollie-11424-2.gif"
                alt="TripAdvisor"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TripAdvisorEmbed;
