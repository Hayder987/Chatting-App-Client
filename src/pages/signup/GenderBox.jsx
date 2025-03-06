
const GenderBox = ({handleGernderCheackBox, selectedGender}) => {
  
  return (
    <div className="flex gap-4">
      <div className="form-control ">
        <label className="label mb-2">
          <span className="label-text text-white">Male</span>
          <input 
          type="checkbox" 
          checked={selectedGender==='male'}
          onChange={()=> handleGernderCheackBox('male')}
          className="checkbox text-white" />
        </label>
      </div>
      {/* ------------ */}
      <div className="form-control ">
        <label className="label mb-2">
          <span className="label-text text-white">Female</span>
          <input type="checkbox"
          checked={selectedGender==='female'}
          onChange={()=> handleGernderCheackBox('female')}
           className="checkbox text-white" />
        </label>
      </div>
    </div>
  );
};

export default GenderBox;


